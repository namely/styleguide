import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import Icon from 'misc/icon';
import Sinon from 'sinon';

describe('Icon', () => {
  let callback = Sinon.spy();

  let props = {
    name: 'test',
    extraClasses: ['extraclass-1', 'extraclass-2'],
    size: 18,
    top: 100,
    onClick: callback
  }

  let component;
  let icon;
  beforeEach(() => {
    component = TestUtils.renderIntoDocument(
      <Icon {...props} />
    );
    icon = ReactDOM.findDOMNode(component);
  })

  it('can render a component', () => {
    TestUtils.findRenderedDOMComponentWithClass(component, 'icon-test');
  });

  it('applies the relative class to the rendered component', () => {
    expect(icon.getAttribute('class')).to.contain('relative');
  });

  it('applies extraClasses to the rendered component', () => {
    let classes = icon.getAttribute('class');
    expect(classes).to.contain('extraclass-1');
    expect(classes).to.contain('extraclass-2');
  });

  it('applies the fontSize prop as an inline style', () => {
    let inlineStyles = icon.getAttribute('style').replace(/ /g, '');
    expect(inlineStyles).to.contain(`font-size:${props.size}px;`);
  });

  it('applies the top prop as an inline style', () => {
    let inlineStyles = icon.getAttribute('style').replace(/ /g, '');
    expect(inlineStyles).to.contain(`top:${props.top}px;`);
  });

  it('fires the onClick prop when clicked', () => {
    TestUtils.Simulate.click(icon);
    expect(callback.called).to.be.true;
  });
});
