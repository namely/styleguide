import Day from './day';
import Moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';
import createClass from 'create-react-class';

export default createClass({

  displayName: "DayPicker",

  propTypes: {
    date: PropTypes.object.isRequired,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    onChangeDate: PropTypes.func.isRequired,
    visibleMonth: PropTypes.number.isRequired,
    visibleYear: PropTypes.number.isRequired
  },

  arrayByBoundary(start, end) {
    var out = [];
    for(var i= start; i<=end; i++) { out.push(i); }
    return out;
  },

  classes() {
    var classes = ['daypicker', 'relative'];
    if (this.weeksInMonth() > 5) classes.push('extra-week');
    return classes.join(' ');
  },

  mappedMonth() {
    var daysArray = this.arrayByBoundary(1, this.startOfVisibleMonth().endOf('month').date()),
        reactObj = this;

    return daysArray.map(function(dayOfMonth) {

      var thisDate = Moment({ year: reactObj.props.visibleYear,
                              month: reactObj.props.visibleMonth,
                              date: dayOfMonth });

      var disabled = (!!reactObj.props.minDate && thisDate.isBefore(reactObj.props.minDate)) ||
                     (!!reactObj.props.maxDate && thisDate.isAfter(reactObj.props.maxDate)),
          selected = false,
          weekNumber = Math.ceil((dayOfMonth + reactObj.startOfVisibleMonth().weekday()) / 7);

      if (reactObj.props.date.month() == reactObj.props.visibleMonth &&
          reactObj.props.date.year() == reactObj.props.visibleYear) {
        selected = (dayOfMonth == reactObj.props.date.date());
      }

      return <Day date={thisDate}
                  disabled={disabled}
                  key={'day-mo-' + dayOfMonth}
                  onChangeDate={reactObj.changeDate}
                  selected={selected}
                  week={weekNumber} />
    });
  },

  changeDate(date) {
    this.props.onChangeDate(date);
  },

  startOfVisibleMonth() {
    return Moment({year: this.props.visibleYear, month: this.props.visibleMonth});
  },

  weeksInMonth() {
    return Math.ceil((this.startOfVisibleMonth().weekday() + this.startOfVisibleMonth().endOf('month').date()) / 7);
  },

  render() {
    return (
      <div className={this.classes()}>
        <div>
          {this.mappedMonth()}
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
});
