import React, { createClass, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

export default createClass({

  displayName: 'Popup',

  propTypes: {
    width: PropTypes.oneOf([200, 300, 400])
  },

  getDefaultProps() {
    return {
      width: 300
    };
  },

  getInitialState() {
    return {
      open: false,
      posX: 'right',
      posY: 'top'
    };
  },

  _showPop() {
    const { posX, posY } = this.state;
    const baseNode = this.refs.child0.getBoundingClientRect();
    const baseWidth = baseNode.width;
    const posXLen = (baseWidth / 2) + 5;

    let popStyle = {
      width: `${this.props.width}px`
    };
    popStyle[posX] = `-${posXLen}px`;
    popStyle[posY] = "140%";

    let triStyle = {};
    triStyle[posX] = "30px";
    triStyle[posY] = "-10px";

    return (
      <div className="bg-grey-90 bc-grey-90 p3 rounded-3 absolute" style={popStyle} >
        {this._children[".1"]}
        <span className={`triangle-${posY} absolute`} style={triStyle} ></span>
      </div>
    );
  },

  _togglePop(e) {
    const { open } = this.state;

    if (open) {
      this.setState({ open: false });
    } else {
      const node = this.refs.popContainer.getBoundingClientRect();
      const nodeBottom = node.bottom;
      const nodeRight = node.right;
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const posX = nodeRight + this.props.width > windowWidth ? 'right' : 'left';
      const posY = nodeBottom + this.props.width > windowHeight ? 'bottom' : 'top';

      this.setState({
        open: true,
        posX: posX,
        posY: posY
      });
    }
  },

  close() {
    this.setState({ open: false });
  },

  render() {
    let index = 0;
    const children = Children.map(this.props.children, (child) => {
      return cloneElement(child, {
       ref: `child${index++}`
      });
    });

    this._children = children;

    return (
      <div className="relative" ref="popContainer" >
        <div onClick={this._togglePop} >{this._children[0]}</div>
        {this.state.open ? this._showPop() : void 0}
      </div>
    );
  }
});
