import 'core-js/shim';
import React from 'react';
import PropTypes from 'prop-types';

export default React.createClass({

  displayName: "GridBlock",

  colContent() {
    return this.props.colContent || this.props.colClass
  },

  render() {
    return (
      <div className={"grid-block " + this.props.colClass}>
        <p className="col-class">{this.colContent()}</p>
      </div>
      );
  }
});
