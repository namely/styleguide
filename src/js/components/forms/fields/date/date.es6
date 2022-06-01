import assign from 'lodash.assign';
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from './date-picker';
import { fieldProps, FieldBase } from '../base';
import Moment from 'moment';
import Tooltip from '../../../overlays/tooltip';
import Overlay from '../../../overlays/overlay-click';
import omit from '../../../utils/omit';

// Note: The value of date.month() for 1/1/2015 is 0, not 1

let validDateFormats = ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY/MM/DD', 'MMM D, YYYY'];

class DateField extends FieldBase {

  constructor() {
    super();
    this.handleDate = this.handleDate.bind(this);
  }

  baseContainerClasses() {
    return ['date-field', 'col-3'];
  }

  boundedMaxDate() {
    if (!!this.props.maxDate) {
      if (this.props.includeMaxMinBounds) {
        return this.momentDate(this.props.maxDate).add(1, 'day');
      } else {
        return this.momentDate(this.props.maxDate);
      }
    }
  }

  boundedMinDate() {
    if (!!this.props.minDate) {
      if (this.props.includeMaxMinBounds) {
        return this.momentDate(this.props.minDate).subtract(1, 'day');
      } else {
        return this.momentDate(this.props.minDate);
      }
    }
  }

  handleDate(moment) {
    const value = moment.format(this.props.dateFormat);
    this.handleChange(value);
  }

  datePicker() {
    return (
      <DatePicker date={this.state.value ? this.momentDate(this.state.value) : Moment()}
                  maxDate={this.boundedMaxDate()}
                  minDate={this.boundedMinDate()}
                  onChangeDate={this.handleDate} />
    );
  }

  disabled() {
    return this.props.disabled || !this.isFormatValid();
  }

  iconStyle() {
    return {
      right: '8px',
      top: '6px',
      fontSize: '15px'
    };
  }

  validate(value=null) {
    if ((!!value && !this.momentDate(value).isValid()) || (!!this.state.value && !this.momentDate(this.state.value).isValid())) {
      return ['Invalid date'];
    } else {
      return [];
    }
  }

  isFormatValid() {
    return validDateFormats.indexOf(this.props.dateFormat) != -1;
  }

  triggerContent() {
    //TODO: Remove `spreadProps` pattern from codebase
    const spreadProps = omit(this.props, 'defaultValue', 'maxDate', 'minDate', 'dateFormat', 'contextualHelp', 'errors', 'extraClasses', 'date');

    return (
      <div className='relative rounded-2 no-select' >
        <input className={this.inputClasses()}
               id={this.props.name}
               type="text"
               value={this.inputValue()}
               {...spreadProps} />
        <span className='icon-calendar ml1 absolute'
              style={this.iconStyle()}></span>
      </div>
    );
  }

  momentDate(date) {
    if (!date) {
      return null;
    }

    switch (date.constructor.name) {
      case "Date":
      case "Number":
        return Moment(date);
      case "Moment":
        return date;
      case "String":
        return Moment(date, this.props.dateFormat);
      default:
        return null;
    }
  }

  tooltip() {
    return (
      <Tooltip content={this.datePicker()}
               position='top-right'
               right={-24}
               top={37} />
    );
  }

  inputValue() {
    const {
      value
    } = this.state;

    if (value) {
      if (typeof value === 'object') {
        return value.format(this.props.dateFormat);
      } else {
        return value;
      }
    }
  }

  contents() {
    if (!this.disabled()) {
      return (
        <Overlay content={this.tooltip()} ref="overlay">
          {this.triggerContent()}
        </Overlay>
      );
    } else {
      return this.triggerContent();
    }
  }
};

DateField.displayName = "DateField";

DateField.propTypes = assign({
  dateFormat: PropTypes.oneOf(validDateFormats).isRequired,
  includeMaxMinBounds: PropTypes.bool,
  maxDate: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
  minDate: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number])
}, fieldProps);

export default DateField;
