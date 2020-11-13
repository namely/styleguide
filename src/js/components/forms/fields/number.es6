import assign from 'lodash.assign';
import React from 'react';
import { fieldProps, FieldBase} from './base';
import omit from '../../utils/omit';

const Type = React.PropTypes;

class NumberField extends FieldBase {

  constructor() {
    super();
    this.units = this.units.bind(this);
  }

  units(){
    if(this.props.units) {
      return <span className={this.unitsClasses()}>{this.props.units}</span>
    }
  }

  unitsClasses() {
    var classes = ['units'];
    classes.push('grey-50');
    return classes.join(' ');
  }

  baseContainerClasses() {
    return ['number-field'];
  }

  validate(value=null) {
    if (!!value && Number.isNaN(+value)) {
      return ['Invalid number'];
    } else {
      return [];
    }
  }

  contents() {
    // get all props except for onChange
    const propsSpread = omit(this.props, 'onChange', 'extraClasses', 'units', 'errors');

    return  (
      <div>
        <input 
          type="number"
          id={this.props.name}
          onChange={(e) => this.handleChange(e.target.value)}
          {...propsSpread}
        />
        <span className='icon-arrow-double relative'></span>
        {this.units()}
      </div>
    );
  }
};

NumberField.displayName = "NumberField";

NumberField.propTypes = assign({
  units: Type.string
}, fieldProps);

export default NumberField;
