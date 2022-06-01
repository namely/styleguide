import React from 'react';
import PropTypes from 'prop-types';
import createClass from 'create-react-class';

const {
  cloneElement,
} = React;

const ActionBar = createClass({

  displayName: "ActionBar",

  propTypes: {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    actions: PropTypes.node
  },

  title() {
    if (this.props.title) {
      return <div className="flex-auto"><h3 className="m0 inline">{this.props.title}</h3><span className="ml2">{this.props.subtitle}</span></div>;
    }
  },

  description() {
    if (this.props.description) {
      return <div className="flex-auto right-align" dangerouslySetInnerHTML={{__html: this.props.description}}></div>;
    }
  },

  actions() {
    if (this.props.actions.length > 0) {
      var actions = this.props.actions;

      actions = actions.map( (action, i) => {
        return cloneElement(action, {key: `action-${i}`, size: "sm"});
      });

      return actions;
    }
  },

  render() {
    return (
      <div className="fixed top-0 fill anim-drop" style={{background: 'rgba(255,255,255,0.95)', zIndex: 99, boxShadow: '0 2px 5px rgba(20,33,45, 0.1)'}}>
        <div className="flex flex-center p2 mt0 mb0 mx-auto" style={{width: 944}}>
          {this.title()}
          {this.description()}
          <div className="ml2">{this.actions()}</div>
        </div>
      </div>
    );
  }
});


module.exports = ActionBar;
