import React, { createClass } from 'react';
import PropTypes from 'prop-types';
import Icon from '../misc/icon';

export default createClass({
  displayName: 'fieldErrors',

  propTypes: {
    errors: PropTypes.array,
    extraClasses: PropTypes.array
  },

  classes() {
    let classes = ['py1', 'px2', 'clearfix'];
    return classes.concat(this.props.extraClasses).join(' ');
  },

  list() {
    return this.props.errors.map(function(errorMsg) {
      return <div className="orange small semibold" key={errorMsg} >
        <Icon name="alert" extraClasses={['mr1']} size={12} top={-1} />
        {errorMsg}
      </div>
    });
  },

  render() {
    if (this.props.errors && this.props.errors.length > 0) {
      return <div className={this.classes()}>
        {this.list()}
      </div>;
    } else {
      return null;
    }
  }
});
