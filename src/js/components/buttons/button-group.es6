import React from 'react';
import PropTypes from 'prop-types';

export default React.createClass({

  displayName: "ButtonGroup",

  propTypes: {
   type: PropTypes.oneOf(['actions']),
   children: PropTypes.node.isRequired,
   extraClasses: PropTypes.arrayOf(PropTypes.string)
  },

  createClass: function(value) {
    return "button-group-" + value;
  },

  classes: function() {
    var classes = ["button-group"];
    var props = this.props;

    if (props.type) {
      classes.push(this.createClass(props.type));
    }

    if (props.extraClasses) {
      classes.push(props.extraClasses.join(' '));
    }

    return classes.join(' ');
  },

  render() {
    return <div className={ this.classes() } >{ this.props.children }</div>;
  }
});
