import React, { cloneElement } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default React.createClass({

  displayName: "OverlayClick",

  propTypes: {
    content: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func
  },

  getDefaultProps() {
    return {
      onClick: function() {},
      onClose: function() {},
      onOpen: function() {}
    };
  },

  getInitialState() {
    return { isOpen: false };
  },

  classes() {
    let classes = ['relative'];
    return classes.join(' ');
  },

  findParent(givenNode) {
    let parent = givenNode.parentElement;
    if (parent) {
      return this.findParent(parent);
    } else {
      return givenNode;
    }
  },

  attachParentListener(e) {
    this.findParent(ReactDOM.findDOMNode(this)).addEventListener('click', this.handleDocumentClick);
    this.show();
  },

  content() {
    if (this.state.isOpen) {
      return cloneElement(this.props.content);
    }
  },

  hide() {
    this.props.onClose();
    this.setState({isOpen: false});
    this.findParent(ReactDOM.findDOMNode(this)).removeEventListener('click', this.handleDocumentClick);
  },

  handleDocumentClick(e) {
    let node = ReactDOM.findDOMNode(this);

    if (node && node.contains(e.target)) {
      this.props.onClick();
    } else {
      this.hide();
    }
  },

  show() {
    this.props.onOpen();
    this.setState({isOpen: true});
  },

  render() {
    return (
      <div className={this.classes()} onClick={this.state.isOpen ? null : this.attachParentListener}>
        {this.props.children}
        {this.content()}
      </div>
    );
  }
});
