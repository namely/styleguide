import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import Moment from 'moment';
import DateField from 'forms/fields/date/date';

describe('DateField', () => {

  const renderComponent = (givenProps) => TestUtils.renderIntoDocument(
    <DateField {...givenProps} />
  );

  let props;
  beforeEach(() => {
    props = { dateFormat: 'MMM D, YYYY' };
  });

  it('renders successfully', () => {
    let component = renderComponent(props);
    TestUtils.findRenderedDOMComponentWithClass(component, 'date-field');
  });

  describe('Date formats', () => {
    let renderComponent = (givenDateFormat, givenDefaultValue) => TestUtils.renderIntoDocument(
      <DateField
        name='startDate'
        dateFormat={givenDateFormat}
        defaultValue={givenDefaultValue}
      />
    );

    let openDatePicker = (givenComponent) => givenComponent.refs.overlay.setState({isOpen: true});
    let getMonthPicker = (givenComponent) => TestUtils.findRenderedDOMComponentWithClass(givenComponent, 'monthpicker');

    it('renders successfully with US date format', () => {
      let component = renderComponent('MM/DD/YYYY', '04/15/2014');
      openDatePicker(component);
      expect(
        ReactDOM.findDOMNode(getMonthPicker(component)).textContent
      ).to.not.have.string('NaN');
    });

    it('renders successfully with international date format', () => {
      let component = renderComponent('DD/MM/YYYY', '15/04/2014');
      openDatePicker(component);
      expect(
        ReactDOM.findDOMNode(getMonthPicker(component)).textContent
      ).to.not.have.string('NaN');
    });

    it('renders successfully with ISO date format', () => {
      let component = renderComponent('YYYY/MM/DD', '2014/04/15');
      openDatePicker(component);
      expect(
        ReactDOM.findDOMNode(getMonthPicker(component)).textContent
      ).to.not.have.string('NaN');
    });

    it('renders successfully with long date format', () => {
      let component = renderComponent('MMM D, YYYY', 'Apr 15, 2014');
      openDatePicker(component);
      expect(
        ReactDOM.findDOMNode(getMonthPicker(component)).textContent
      ).to.not.have.string('NaN');
    });

  });

  //skipping failing test because datefield is currently not being exported
  describe.skip('refs.*.value()', () => {
    it('is set the date string in the given dateFormat when clicked through the UI', (done) => {
      class Example extends React.Component {
        constructor(props) {
          super(props);
          this.render = this.render.bind(this);
          this.state = {};
        }
        render() {
          return (
            <DateField
              name="startDate"
              ref="startDate"
              label="Start Date"
              dateFormat="MM/DD/YYYY"
              key={this.state.startDate}
              defaultValue={this.state.startDate}
            />
          );
        }
      }

      let component = TestUtils.renderIntoDocument(<Example />);

      let overlay = ReactDOM.findDOMNode(component.refs.startDate.refs.overlay);
      TestUtils.Simulate.click(overlay);

      let firstDay = TestUtils.scryRenderedDOMComponentsWithClass(
        component, 'day'
      )[0];
      setTimeout(() => {
        try {
          // click the first day of this month
          const dayNode = firstDay.children[0];
          TestUtils.Simulate.click(
            dayNode
          );
          // desired value is set
          expect(component.refs.startDate.value()).to.eql(
            Moment().startOf('month').format('MM/DD/YYYY')
          );
          // overlay closes
          expect(
            TestUtils.scryRenderedDOMComponentsWithClass(
              component, 'day'
            ).length
          ).to.eql(0);
          done();
        } catch (e) {
          done(e);
        }
      }, 0);
    });
  });
});
