import React from 'react';
import PropTypes from 'prop-types';
import { fieldProps, FieldBase} from './base';
import omit from '../../utils/omit';

class TextField extends FieldBase {

  constructor() {
    super();
  }

  baseContainerClasses() {
    return ['text-field'];
  }

  contents() {
    const spreadProps = omit(this.props, 'onChange', 'extraClasses', 'errors');

    return <input
             type="text"
             id={this.props.name}
             onChange={(e) => this.handleChange(e.target.value)}
             {...spreadProps} />
  }
};

TextField.displayName = 'TextField';

export default TextField;
