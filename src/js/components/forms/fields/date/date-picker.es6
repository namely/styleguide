import DayPicker from './day-picker'
import MonthPicker from './month-picker'
import React from 'react';
import PropTypes from 'prop-types';
import createClass from 'create-react-class';

export default createClass({

  displayName: "DatePicker",

  propTypes: {
    closeTooltip: PropTypes.func,
    date: PropTypes.object.isRequired,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    onChangeDate: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      closeTooltip: function() {}
    };
  },

  getInitialState() {
    return {
      visibleMonth: this.props.date.month(),
      visibleYear: this.props.date.year()
    };
  },

  changeMonth(month, year) {
    this.setState({
      visibleMonth: month,
      visibleYear: year
    });
  },

  changeDate(date) {
    this.props.onChangeDate(date);
    this.props.closeTooltip();
  },

  render() {
    return (
      <div className="datepicker no-select">
        <div>
          <MonthPicker maxDate={this.props.maxDate}
                       minDate={this.props.minDate}
                       onChangeMonth={this.changeMonth}
                       visibleMonth={this.state.visibleMonth}
                       visibleYear={this.state.visibleYear} />
          <DayPicker date={this.props.date}
                     maxDate={this.props.maxDate}
                     minDate={this.props.minDate}
                     onChangeDate={this.changeDate}
                     visibleMonth={this.state.visibleMonth}
                     visibleYear={this.state.visibleYear} />
          <div className="clearfix"></div>
        </div>
      </div>
    );
  }
});
