import 'core-js/shim';
import React from 'react';
import PropTypes from 'prop-types';
import createClass from 'create-react-class';

export default createClass({

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
