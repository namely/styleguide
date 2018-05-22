import { expect } from 'chai';
import Sinon from 'sinon';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Sortable from 'lists/sortable';

describe('Sortable', () => {
  let sortable;
  beforeEach(() => {
    sortable = TestUtils.renderIntoDocument(
      <Sortable>
        <table>
          <thead>
            <tr>
              <th sortKey="name"><a href="#" className="block">First</a></th>
              <th><a href="#" className="block">Last</a></th>
              <th sortKey="date" active={true}><a href="#" className="block">Start Date</a></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td name="john">John</td>
              <td>Smith</td>
              <td date={2014}>2014-01-01</td>
            </tr>
            <tr>
              <td name="chuck">Chuck</td>
              <td>D</td>
              <td date={2013}>2013-03-15</td>
            </tr>
            <tr>
              <td name="flava">Flava</td>
              <td>Flav</td>
              <td date={2012}>2012-06-28</td>
            </tr>
          </tbody>
        </table>
      </Sortable>
    );
  });

  it('renders', () => {
    let headers = TestUtils.scryRenderedDOMComponentsWithTag(sortable, 'th');
    let rows = TestUtils.scryRenderedDOMComponentsWithTag(sortable, 'tr');
    expect(headers.length).to.eql(3);
    expect(rows.length).to.eql(4);

    expect(rows[1].children.length).to.eql(3);
  });

  it('sorts', () => {
    let bodyCells = TestUtils.scryRenderedDOMComponentsWithTag(sortable, 'td');
    let headers = ReactDOM.findDOMNode(sortable).querySelectorAll('th');

    // the first cell should be Flava because the row is initially ordered by date in ascending order
    expect(
      ReactDOM.findDOMNode(bodyCells[0]).textContent
    ).to.eql('Flava');

    // the date column header should have an up-arrow while the inactive name column should have double-arrow
    expect(
      headers[2].querySelectorAll('.icon-arrow-up').length
    ).to.eql(1);
    expect(
      headers[0].querySelectorAll('.icon-arrow-double').length
    ).to.eql(1);

    TestUtils.Simulate.click(headers.item(0));

    // the first cell should be Chuck because the First column header was clicked
    bodyCells = TestUtils.scryRenderedDOMComponentsWithTag(sortable, 'td');
    expect(
      bodyCells[0].textContent
    ).to.eql('Chuck');

    expect(
      headers[0].querySelectorAll('.icon-arrow-up').length
    ).to.eql(1);
    expect(
      headers[2].querySelectorAll('.icon-arrow-double').length
    ).to.eql(1);
  });
});
