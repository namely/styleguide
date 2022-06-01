import { expect } from 'chai';
import TestUtils from 'react-dom/test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'overlays/modal';
import Sinon from 'sinon';

describe('Modal', () => {
  let callback = Sinon.spy();

  let props = {
    children: 'Child content',
    closeModal: callback,
    isOpen: false,
    contentColumns: 5
  }

  let component;
  let modal;
  beforeEach(() => {
    component = TestUtils.renderIntoDocument(
      <Modal {...props} />
    );
    modal = ReactDOM.findDOMNode(component);
  });

  it('renders successfully', () => {
    TestUtils.isElement(component);
  });

  it('renders child content passed in through props', () => {
    expect(modal.innerHTML).to.contain(props.children);
  });

  it('fires the closeModal prop when clicked', () => {
    TestUtils.Simulate.click(modal);
    expect(callback.called).to.be.true;
  });

  describe('Open Modal', () => {
    let callback = Sinon.spy();

    let componentOpen;
    beforeEach(() => {
      componentOpen = TestUtils.renderIntoDocument(
        <Modal {...props} isOpen={true} disableClickBackground={true}/>
      )
    });

    it('adds the correct column class', () => {
      let element = TestUtils.findRenderedDOMComponentWithClass(componentOpen, 'col-5');
      expect(element).to.exist;
    });


    it('does not fire the closeModal prop when disableClickBackground prop is true', () => {
      TestUtils.Simulate.click(modal);
      expect(callback.called).to.be.false;
    });
  });

});
