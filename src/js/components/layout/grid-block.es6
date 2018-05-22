import 'core-js/shim';
import React from 'react';

const Type = React.PropTypes;

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
