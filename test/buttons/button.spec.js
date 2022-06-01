import { expect } from 'chai';
import TestUtils from 'react-dom/test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'buttons/button';
import ButtonGroup from 'buttons/button-group';

describe('Button', () => {
  let props = {
    type: 'secondary',
    label: 'test',
    size: 'sm',
    disabled: true,
    link: true,
    extraClasses: ['extraclass-1', 'extraclass-2'],
    icon: 'paperclip'
  }

  let component;
  let button;
  beforeEach(() => {
    component = TestUtils.renderIntoDocument(
      <Button {...props} />
    );
    button = ReactDOM.findDOMNode(component);
  })

  it('should output a button', () => {
    let type = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button');
    expect(type.length).to.equal(1);
  });

  it('should show the type if passed one', () => {
    let classes = button.getAttribute('class');
    expect(classes).to.contain('secondary');
  });

  it('applies extraClasses to the rendered component', () => {
    let classes = button.getAttribute('class');
    expect(classes).to.contain('extraclass-1');
    expect(classes).to.contain('extraclass-2');
  });

  it('applies the button-link class if true in props', () => {
    let classes = TestUtils.scryRenderedDOMComponentsWithClass(component, 'button-link');
    expect(classes.length).to.equal(1);
  });

  it('can render a component with an icon', () => {
    let classes = button.getAttribute('class');
    expect(classes).to.contain('icon-paperclip');
  });

    describe('Disabled prop', () => {
      it('should render disabled if the prop is true', () => {
        let instance = button.getAttribute('disabled');
        expect(instance).to.exist;
      });

      it('should render without being disabled if the prop is false', () => {
        let instance = button.getAttribute('disabled');
        expect(instance).to.not.be.true;
      });
    });

});
