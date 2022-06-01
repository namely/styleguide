import React from 'react';
import PropTypes from 'prop-types';
import ContextualHelp from '../contextual-help';
import FieldErrors from '../field-errors';

var fieldProps = {
  contextualHelp: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
  disabled: PropTypes.bool,
  errors: PropTypes.array,
  extraClasses: PropTypes.array,
  defaultValue: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.array]),
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyUp: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool
};

class FieldBase extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      disabled: false,
      value: null
    };
  }

  componentWillMount() {
    this.setState({
      disabled: this.props.disabled,
      errors: this.props.errors,
      value: this.props.defaultValue
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.props.onChange(this.state.value);
    }

    if (prevProps.defaultValue !== this.props.defaultValue) {
      this.setState({
        value: this.props.defaultValue
      });
    }

    if (prevProps.errors !== this.props.errors) {
      this.setState({
        errors: this.props.errors
      });
    }
  }

  baseContainerClasses() {
    return [];
  }

  containerClasses() {
    let classes = this.baseContainerClasses() || [];
    if (this.disabled()) classes.push('disabled');
    classes = classes.concat(this.props.extraClasses);
    return classes.join(' ');
  }

  contextualHelp() {
    if (this.props.contextualHelp) {
      return (
        <ContextualHelp extraClasses={["pointer", "mxn1"]}>
          <p className="white m0">{this.props.contextualHelp}</p>
        </ContextualHelp>
      );
    }
  }

  disabled() {
    return this.props.disabled;
  }

  handleChange(newValue) {
    this.setState({
      errors: this.validate(newValue),
      value: newValue
    });
  }

  inputClasses() {
    let classes = ['relative', 'fit', 'pr4'];
    if (this.state.errors && this.state.errors.length > 0) classes.push('bc-orange bw-2');
    return classes.join(' ');
  }

  validate(value=null) {
    if (!value && this.props.required) {
      return ['Required'];
    } else {
      return [];
    }
  }

  label() {
    if (this.props.label) {
      return (
        <label htmlFor={this.props.name} className="mb1 px2 relative">
          {this.props.required ? (<span className="orange">* </span>) : null}
          {this.props.label}
        </label>
      );
    }
  }

  value() {
    return this.state.value;
  }

  contents() {
    return (
      <span>Overwrite me!</span>
    );
  }

  render() {
    return (
      <div className={this.containerClasses()}>
        {this.label()}
        {this.contextualHelp()}
        {(this.label() || this.contextualHelp()) ? <br /> : null}
        {this.contents()}
        <div className="clearfix"></div>
        <FieldErrors errors={this.state.errors} />
      </div>
    );
  }
};

FieldBase.propTypes = fieldProps;

FieldBase.defaultProps = {
  disabled: false,
  errors: [],
  onBlur: function() {},
  onChange: function() {},
  onFocus: function() {},
  onKeyUp: function() {},
  readOnly: false,
  required: false
};

export { FieldBase, fieldProps };
