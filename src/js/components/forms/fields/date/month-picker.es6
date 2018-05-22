import Moment from 'moment'
import React from 'react';

var months = ["January", "February", "March", "April",
              "May", "June", "July", "August",
              "September", "October", "November", "December"];

var weekAbbvs = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

const Type = React.PropTypes;

export default React.createClass({

  displayName: "MonthPicker",

  propTypes: {
    maxDate: Type.object,
    minDate: Type.object,
    onChangeMonth: Type.func.isRequired,
    visibleMonth: Type.number.isRequired,
    visibleYear: Type.number.isRequired
  },

  goToNextMonth(e) {
    e.preventDefault();
    if (this.props.visibleMonth == 11) {
      this.props.onChangeMonth(0, this.props.visibleYear+1);
    } else {
      this.props.onChangeMonth(this.props.visibleMonth+1, this.props.visibleYear);
    }
  },

  goToPrevMonth(e) {
    e.preventDefault();
    if (this.props.visibleMonth == 0) {
      this.props.onChangeMonth(11, this.props.visibleYear-1);
    } else {
      this.props.onChangeMonth(this.props.visibleMonth-1, this.props.visibleYear);
    }
  },

  nextIcon() {
      return <div className="icon-chevron-right absolute top-0 blue-50 pointer"
                  onClick={this.goToNextMonth}></div>
  },

  prevIcon() {
      return <div className="icon-chevron-left absolute top-0 blue-50 pointer"
                  onClick={this.goToPrevMonth}></div>
  },

  weekLabels() {
    return [0,1,2,3,4,5,6].map(function(i) {
      return <span className={"grey-50 inline-block center h6 day-in-week-" + i.toString()}
                   key={"week-label-" + i.toString()} >
               {weekAbbvs[i]}
             </span>
    });
  },

  render() {
    return (
      <div className="monthpicker relative fill">
        {this.prevIcon()}
        <div className="center white semibold">
          {months[this.props.visibleMonth] + " " + this.props.visibleYear}
        </div>
        {this.nextIcon()}
        <div className="mt1 mb1 week-labels relative">
          {this.weekLabels()}
        </div>
      </div>
    );
  }
});
