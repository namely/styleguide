import assign from 'lodash.assign';
import React from 'react';
import { fieldProps, FieldBase} from './base';
import omit from '../../utils/omit';

const Type = React.PropTypes;

class TextAreaField extends FieldBase {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    if (this.props.expandable) {
      e.target.style.height = "auto";
      e.target.style.height = e.target.scrollHeight + "px";
    }

    this.handleChange(e.target.value);
  }

  baseContainerClasses() {
    return ['textarea'];
  }

  contents() {
    //TODO: remove `spreadProps` pattern
    const spreadProps = omit(this.props, 'onChange', 'extraClasses', 'expandable', 'errors');

    return <textarea
              id={this.props.name}
              onChange={this.onChange}
              {...spreadProps} />
  }
};

TextAreaField.displayName = "TextAreaField";

TextAreaField.propTypes = assign({
  expandable: Type.bool
}, fieldProps);

TextAreaField.defaultProps = assign({
  expandable: false
}, FieldBase.defaultProps);

export default TextAreaField;
