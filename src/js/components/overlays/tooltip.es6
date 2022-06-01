import React from 'react';
import PropTypes from 'prop-types';
import createClass from 'create-react-class';

const {
  cloneElement,
} = React;

const caretPositions = [
  "top-left", "top-center", "top-right",
  "right-top", "right-center", "right-bottom",
  "bottom-right", "bottom-center", "bottom-left",
  "left-bottom", "left-center", "left-top"
];

export default createClass({
  displayName: "Tooltip",

  propTypes: {
    bottom: PropTypes.number,
    caretPosition: PropTypes.oneOf(caretPositions),
    closeOverlay: PropTypes.func,
    content: PropTypes.node.isRequired,
    extraClasses: PropTypes.array,
    height: PropTypes.oneOf(['auto', PropTypes.number]),
    left: PropTypes.number,
    right: PropTypes.number,
    top: PropTypes.number,
    width: PropTypes.oneOf(['auto', PropTypes.number]),
    zIndex: PropTypes.number
  },

  getDefaultProps() {
    return {
      bottom: null,
      caretPosition: 'top-right',
      closeOverlay: function() {},
      height: 'auto',
      left: null,
      right: null,
      top: null,
      width: 'auto',
      zIndex: 300
    };
  },

  getInitialState() {
    return {
      height: this.props.height || null,
      width: this.props.width || null
    };
  },

  classes() {
    let classes = ['absolute', 'tooltip'];
    classes.push(this.props.caretPosition);
    if (!!this.props.extraClasses) {
      classes = classes.concat(this.props.extraClasses);
    }
    return classes.join(' ');
  },

  direction() {
    switch (this.props.caretPosition) {
      case 'top-center':
      case 'top-left':
      case 'top-right':
        return 'top';
      case 'right-center':
      case 'right-top':
      case 'right-bottom':
        return 'right';
      case 'bottom-center':
      case 'bottom-left':
      case 'bottom-right':
        return 'bottom';
      case 'left-bottom':
      case 'left-center':
      case 'left-top':
        return 'left';
    }
  },

  style() {
    return {
      bottom: this.props.bottom,
      height: this.props.height,
      left: this.props.left,
      right: this.props.right,
      top: this.props.top,
      width: this.props.width,
      zIndex: this.props.zIndex
    };
  },

  triangleClasses() {
    let classes = ['absolute', 'bc-blue-95', 'blue-95'];
    classes.push(`triangle-${this.direction()}`);
    return classes.join(' ');
  },

  render() {
    return (
      <div className={this.classes()} style={this.style()}>
        <div className={this.triangleClasses() + ' absolute bc-blue-95 blue-95'}></div>
        {cloneElement(this.props.content)}
        <div className="clearfix"></div>
      </div>
    );
  }
});
