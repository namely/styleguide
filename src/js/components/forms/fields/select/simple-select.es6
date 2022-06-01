import React from 'react';
import PropTypes from 'prop-types';
import createClass from 'create-react-class';
import Overlay from '../../../overlays/overlay-click';

export default createClass({

  displayName: "SimpleSelect",

  propTypes: {
    disabled: PropTypes.bool,
    hasError: PropTypes.bool,
    includeBlank: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  },

  getDefaultProps() {
    return {
      hasError: false,
      onChange: function() {},
      options: []
    };
  },

  getInitialState() {
    return {
      show_options: false,
      value: this._parseValueFromProps() || ''
    };
  },

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value != prevState.value) {
      this.props.onChange(this.state.value);
    }

    if (this.props.value != prevProps.value) {
      this.setState({
        value: this._parseValueFromProps()
      });
    }
  },

  _parseValueFromProps() {
    let {
      options,
      value
    } = this.props;
    if (this.optionsArray()) {
      return options.filter((o) => o === value)[0];
    } else {
      if (value in options) return value;
    }
  },

  arrowClasses() {
    let classes = ['h6', 'ml1', 'relative'];
    classes.push(this.state.show_options ? 'icon-arrow-up' : 'icon-arrow-down');
    return classes.join(' ');
  },

  onClickOption(option) {
    this.setState({
      value: option,
      show_options: false
    });
    this.refs.container.hide();
  },

  onClickOptionEmpty() {
    this.setState({
      value: '',
      show_options: false
    });
    this.refs.container.hide();
  },

  onClickValue() {
    if (!this.props.disabled) {
      this.setState({show_options: !this.state.show_options});
      this.refs.container.hide();
    }
  },

  optionsArray() {
    let options = this.props.options;
    return (typeof options === 'object' && Array.isArray(options)) ? options : false;
  },

  optionsClasses() {
    let classes = ['absolute', 'bb', 'bl', 'br', 'bw-1', 'left-0', 'right-0', 'rounded-bottom-2'];
    classes.push(this.state.show_options ? 'bc-grey-50' : 'bc-grey-25');
    return classes.join(' ');
  },

  optionsObject() {
    let options = this.props.options;
    return (typeof options === 'object' && !Array.isArray(options)) ? options : false;
  },

  renderOptions() {
    if (!this.props.disabled) {
      let optionClasses = 'simple-select-option hover-row bg-white nowrap option pointer py1 px3';

      let emptyOption = (
        <div className={optionClasses+" grey-50"} onClick={this.onClickOptionEmpty}>
          {this.props.placeholder ? this.props.placeholder : "--"}
        </div>
      );

      let options;
      if (this.optionsObject()) {
        options = this.renderOptionsFromObject(optionClasses);
      } else {
        options = this.renderOptionsFromArray(optionClasses);
      }

      return (
        <div className={this.optionsClasses()} style={{zIndex: 1000}}>
          {this.props.includeBlank ? emptyOption : false}
          {options}
        </div>
      );
    } else {
      return false;
    }
  },

  renderOptionsFromArray(classes) {
    return this.props.options.map((option, index) => {
      return (
        <div className={classes + ' grey-75'}
             key={index}
             onClick={this.onClickOption.bind(this, option)}>
          {option}
        </div>
      );
    });
  },

  renderOptionsFromObject(classes) {
    return Object.keys(this.props.options).map((key, index) => {
      return (
        <div className={classes + ' grey-75'}
             key={index}
             onClick={this.onClickOption.bind(this, key)}>
          {this.props.options[key]}
        </div>
      );
    });
  },

  renderValue() {
    let value = this.optionsArray() ? this.state.value : this.props.options[this.state.value];
    let arrowStyle = {top: 1, right: 3, fontSize: '12px', height: '19px'};

    return (
      <div key="simpleselectvalue" ref='simpleSelectValue' className={this.valueClasses()} onClick={this.onClickValue}>
        <div className='nowrap mr1'>
          {value ? value : this.props.placeholder}
        </div>
        <div className={this.arrowClasses()} style={arrowStyle} />
      </div>
    );
  },

  valueBorderClass() {
    if (this.props.hasError) {
      return 'bc-orange bc-orange-hover';
    } else if (this.state.show_options) {
      return 'bc-grey-50';
    }
  },

  valueClasses() {
    let classes = ['simple-select', 'b', 'bw-1', 'flex', 'flex-justify', 'p1', 'grey-75'];
    classes.push(this.valueBorderClass());
    classes.push(this.state.show_options ? 'rounded-top-2' : "rounded-2");
    if (this.props.disabled) {
      classes.push('disabled');
    } else {
      classes.push('pointer bg-white');
    }
    return classes.join(' ');
  },

  renderContainer(...children) {
    if (this.props.disabled) {
      return (
        <div className="relative" ref="container">{children}</div>
      );
    } else {
      return (
        <Overlay 
          content={this.renderOptions()} 
          onClose={() => this.setState({show_options: false})}
          onOpen={() => this.setState({show_options: true})}
          ref="container">
        {children}
        </Overlay>
      );
    }
  },

  render() {
    return this.renderContainer(
          <input type="hidden"
                 key="hidden"
                 name={this.props.name}
                 value={this.state.value}
                 disabled={this.props.disabled} />,
          this.renderValue()
    );
  }
});
