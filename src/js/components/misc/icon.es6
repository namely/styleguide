import React from 'react';
import PropTypes from 'prop-types';

export default React.createClass({

  displayName: "Icon",

  propTypes: {
    name: PropTypes.string.isRequired,
    extraClasses: PropTypes.arrayOf(PropTypes.string),
    size: PropTypes.number,
    top: PropTypes.number
  },

  getDefaultProps() {
    return {
      extraClasses: []
    };
  },

  classes() {
    let classes = [`icon-${this.props.name}`, 'relative'];
    return classes.concat(this.props.extraClasses).join(' ');
  },

  style() {
    return {
      fontSize: this.props.size,
      top: this.props.top
    }
  },

  render() {
    const name = this.props.name;

    return <i className={this.classes()} onClick={this.props.onClick} style={this.style()} />;
  }
});
