import React from 'react';
import PropTypes from 'prop-types';

export default React.createClass({

  displayName: "Button",

  propTypes: {
   type: PropTypes.oneOf([null, 'danger', 'secondary', 'baby', 'previous', 'next']),
   label: PropTypes.string,
   size: PropTypes.oneOf([null, 'sm']),
   disabled: PropTypes.bool,
   link: PropTypes.bool,
   extraClasses: PropTypes.arrayOf(PropTypes.string),
   icon: PropTypes.string,
   onClick: PropTypes.func,
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
