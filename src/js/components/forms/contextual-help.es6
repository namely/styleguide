import React from 'react';
import Tooltip from '../overlays/tooltip';
import Overlay from '../overlays/overlay-click';

const {
  PropTypes : Type
} = React;

const iconStyles = {
  bottom: '1px',
  fontSize: '0.625rem'
};

class ContextualHelp extends React.Component {
  constructor() {
    super();
  }

  tooltip() {
    return (
      <Tooltip
        content={this.props.children}
        top={28}
        left={-13}
      />
    );
  }

  render() {
    const classNames = ['inline-block'].concat(this.props.extraClasses);

    return (
      <div className={classNames.join(' ')}>
        <Overlay content={this.tooltip()}>
          <span className={`icon-help ${this.props.color} relative`} style={iconStyles}></span>
        </Overlay>
      </div>
    );
  }
}

ContextualHelp.propTypes = {
  color: Type.string,
  extraClasses: Type.array
};

ContextualHelp.defaultProps = {
  color: 'grey-50',
  extraClasses: []
};

export default ContextualHelp;
