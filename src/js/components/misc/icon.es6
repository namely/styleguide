import React from 'react';

const Type = React.PropTypes;

export default React.createClass({

  displayName: "Icon",

  propTypes: {
    name: Type.string.isRequired,
    extraClasses: Type.arrayOf(Type.string),
    size: Type.number,
    top: Type.number
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
