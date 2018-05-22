import React from 'react';

const Type = React.PropTypes;

export default React.createClass({

  displayName: "Button",

  propTypes: {
   type: Type.oneOf([null, 'danger', 'secondary', 'baby', 'previous', 'next']),
   label: Type.string,
   size: Type.oneOf([null, 'sm']),
   disabled: Type.bool,
   link: Type.bool,
   extraClasses: Type.arrayOf(Type.string),
   icon: Type.string,
   onClick: Type.func,
  },

  getDefaultProps: function() {
    return {
      type: null,
      size: null,
      disabled: false,
      link: false,
      icon: null
    };
  },

  createClass: function(value) {
    return "button-" + value;
  },

  classes: function() {
    var classes = [];
    var props = this.props;

    if (props.type) {
      classes.push(this.createClass(props.type));
    }

    if (props.size) {
      classes.push(this.createClass(props.size));
    }

    if (props.extraClasses) {
      classes.push(props.extraClasses.join(' '));
    }

    if (props.link === true) {
      classes.push("button-link");
    }

    if (props.icon) {
      classes.push("icon-"+this.props.icon)
    }

    return classes.join(' ');
  },

  render() {
    const {
      label,
      disabled,
      onClick,
      type
    } = this.props;

    return <button
      className={ this.classes() }
      disabled={ disabled }
      label={ label }
      onClick={ onClick }
      type={ type }
    >{ this.props.label }</button>;
  }
});
