import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import AccordionItem from 'misc/accordion-item';

describe('AccordionItem', () => {

  let props = {
    title: 'test',
    containerClasses: ['extraclass-1', 'extraclass-2'],
    children: 'Child content'
  }

  let component;
  let accordionItem;
  beforeEach(() => {
    component = TestUtils.renderIntoDocument(
      <AccordionItem {...props} />
    );
    accordionItem = ReactDOM.findDOMNode(component);
  });

  it('can render a component', () => {
    TestUtils.isElement(component);
  });

  it('defaults to closed if no isOpen prop is passed', () => {
    expect(component.state.isOpen).to.be.false;
  });

  it('renders a header element with the right default classes', () => {
    let accordionHeader = ReactDOM.findDOMNode(component).querySelector('.pointer.flex.flex-center.py2');
    expect(accordionHeader).to.exist;
  });

  it('renders the title', () => {
    let accordionHeader = ReactDOM.findDOMNode(component).querySelector('.pointer');
    expect(accordionHeader.innerHTML).to.contain(props.title);
  });

  it('applies classes passed from props to the rendered component', () => {
    let classes = accordionItem.getAttribute('class');
    expect(classes).to.contain('extraclass-1');
    expect(classes).to.contain('extraclass-2');
  });

  it('renders child content passed in through props', () => {
    expect(accordionItem.innerHTML).to.contain(props.children);
  })

  describe('Open AccordionItem', () => {

    let props = {
      title: 'test',
      containerClasses: ['extraclass-1', 'extraclass-2'],
    }

    let componentOpen;
    beforeEach(() => {
      componentOpen = TestUtils.renderIntoDocument(
        <AccordionItem {...props} isOpen={true} />
      )
    });

    it('sets the isOpen state to true if the isOpen prop is true', () => {
      expect(componentOpen.state.isOpen).to.be.true;
    });

    it('toggles to closed when clicked', () => {
      let accordionHeader = ReactDOM.findDOMNode(componentOpen).querySelector('.pointer');
      TestUtils.Simulate.click(accordionHeader);
      expect(componentOpen.state.isOpen).to.be.false;
    });

    it('displays a blue Collapse icon when open', () => {
      let icon = ReactDOM.findDOMNode(componentOpen).querySelector('.mr1');
      expect(icon.getAttribute('class')).to.contain('icon-collapse');
      expect(icon.getAttribute('class')).to.contain('blue-70');
    });

    it('wraps children in an is-open class', () => {
      let child = TestUtils.findRenderedDOMComponentWithClass(componentOpen, 'is-open');
      expect(child).to.exist;
    });
  });

  describe('Closed AccordionItem', () => {

    let componentClosed;
    beforeEach(() => {
      componentClosed = TestUtils.renderIntoDocument(
        <AccordionItem {...props} isOpen={false} />
      )
    });

    it('sets the isOpen state to false if the isOpen prop is false', () => {
      expect(componentClosed.state.isOpen).to.be.false;
    });

    it('toggles to open when clicked', () => {
      let accordionHeader = ReactDOM.findDOMNode(componentClosed).querySelector('.pointer');
      TestUtils.Simulate.click(accordionHeader);
      expect(componentClosed.state.isOpen).to.be.true;
    });

    it('displays a blue Expand icon when closed', () => {
      let icon = ReactDOM.findDOMNode(componentClosed).querySelector('.mr1');
      expect(icon.getAttribute('class')).to.contain('icon-expand');
      expect(icon.getAttribute('class')).to.contain('blue-70');
    });

    it('wraps children in is-closed and overflow-hidden classes', () => {
      let child = TestUtils.findRenderedDOMComponentWithClass(componentClosed, 'is-closed');
      expect(child).to.exist;
      expect(ReactDOM.findDOMNode(child).getAttribute('class')).to.contain('overflow-hidden');
    });
  });
});
