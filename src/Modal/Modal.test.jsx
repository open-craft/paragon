import React from 'react';
import { mount, shallow } from 'enzyme';

import Modal from './index';
import Button from '../Button';
import Variant from '../utils/constants';

const modalOpen = (isOpen, wrapper) => {
  expect(wrapper.find('.modal').hasClass('d-block')).toEqual(isOpen);
  expect(wrapper.find('.modal-backdrop').exists()).toEqual(isOpen);
  expect(wrapper.find('.modal').hasClass('show')).toEqual(isOpen);
  expect(wrapper.find('.modal').hasClass('fade')).toEqual(!isOpen);
  expect(wrapper.state('open')).toEqual(isOpen);
};
const title = 'Modal title';
const body = 'Modal body';
const defaultProps = {
  title,
  body,
  open: true,
  onClose: () => {},
};
const closeText = 'GO AWAY!';

let wrapper;

describe('<Modal />', () => {
  describe('correct rendering', () => {
    const buttons = [
      <Button buttonType="primary">Blue button!</Button>,
      {
        label: 'Red button!',
        buttonType: 'danger',
      },
      <Button buttonType="success">Green button!</Button>,
    ];

    it('renders default buttons', () => {
      wrapper = mount(<Modal {...defaultProps} />);
      const modalTitle = wrapper.find('.modal-title');
      const modalBody = wrapper.find('.modal-body');

      expect(modalTitle.text()).toEqual(title);
      expect(modalBody.text()).toEqual(body);
      expect(wrapper.find('button')).toHaveLength(2);
    });

    it('renders custom buttons', () => {
      wrapper = mount(<Modal {...defaultProps} buttons={buttons} />);
      expect(wrapper.find('button')).toHaveLength(buttons.length + 2);
    });

    it('renders Warning Variant', () => {
      wrapper = mount(<Modal {...defaultProps} variant={{ status: Variant.status.WARNING }} />);

      const modalBody = wrapper.find('.modal-body');
      expect(modalBody.childAt(0).hasClass('container-fluid')).toEqual(true);
      expect(modalBody.find('p').text()).toEqual(body);

      const icon = modalBody.find('Icon');
      expect(icon.hasClass('fa')).toEqual(true);
      expect(icon.hasClass('fa-exclamation-triangle')).toEqual(true);
      expect(icon.hasClass('fa-3x')).toEqual(true);
      expect(icon.hasClass('text-warning')).toEqual(true);
    });

    it('renders invalid Variant properly', () => {
      wrapper = mount(<Modal {...defaultProps} variant={{ status: 'foo' }} />);
      const modalTitle = wrapper.find('.modal-title');
      const modalBody = wrapper.find('.modal-body');

      expect(modalTitle.text()).toEqual(title);
      expect(modalBody.text()).toEqual(body);
      expect(wrapper.find('button')).toHaveLength(2);
    });

    it('render of the header close button is optional', () => {
      wrapper = mount(<Modal {...defaultProps} renderHeaderCloseButton={false} />);
      const modalHeader = wrapper.find('.modal-header');
      const modalFooter = wrapper.find('.modal-footer');

      expect(modalHeader.find('button')).toHaveLength(0);
      expect(modalFooter.find('button')).toHaveLength(1);
      expect(wrapper.find('button')).toHaveLength(1);
    });

    it('renders custom close button string', () => {
      wrapper = mount(<Modal {...defaultProps} closeText={closeText} />);
      const modalFooter = wrapper.find('.modal-footer');
      const closeButton = modalFooter.find('button');

      expect(closeButton).toHaveLength(1);
      expect(closeButton.children()).toHaveLength(0);
      expect(closeButton.text()).toEqual(closeText);
    });

    it('renders custom close button element', () => {
      const closeElem = <span>{closeText}</span>;
      wrapper = mount(<Modal {...defaultProps} closeText={closeElem} />);
      const modalFooter = wrapper.find('.modal-footer');
      const closeButton = modalFooter.find('button');

      expect(closeButton).toHaveLength(1);
      expect(closeButton.children()).toHaveLength(1);
      expect(closeButton.find('span')).toHaveLength(1);
      expect(closeButton.text()).toEqual(closeText);
    });

    it('renders with IE11-specific styling when IE11 is detected', () => {
      const { MSInputMethodContext } = global;
      const { documentMode } = global.document;

      // mimic IE11
      global.MSInputMethodContext = true;
      global.document.documentMode = true;
      wrapper = mount(<Modal {...defaultProps} />);
      const modal = wrapper.find('.modal');
      expect(modal.hasClass('is-ie11')).toEqual(true);

      global.MSInputMethodContext = MSInputMethodContext;
      global.document.documentMode = documentMode;
    });

    it('renders without IE11-specific styling when IE11 is not detected', () => {
      const { MSInputMethodContext } = global;
      const { documentMode } = global.document;

      // mimic non-IE11 browser
      global.MSInputMethodContext = false;
      global.document.documentMode = false;
      wrapper = mount(<Modal {...defaultProps} />);
      const modal = wrapper.find('.modal');
      expect(modal.hasClass('is-ie11')).toEqual(false);

      global.MSInputMethodContext = MSInputMethodContext;
      global.document.documentMode = documentMode;
    });
  });

  describe('props received correctly', () => {
    beforeEach(() => {
      // This is a gross hack to suppress error logs in the invalid parentSelector test
      jest.spyOn(console, 'error');
      global.console.error.mockImplementation(() => {});
    });

    afterEach(() => {
      global.console.error.mockRestore();
    });

    it('component receives props', () => {
      wrapper = mount(<Modal title={title} body={body} onClose={() => {}} />);

      modalOpen(false, wrapper);
      wrapper.setProps({ open: true });
      modalOpen(true, wrapper);
    });

    it('component receives props and ignores prop change', () => {
      wrapper = mount(<Modal {...defaultProps} />);

      modalOpen(true, wrapper);
      wrapper.setProps({ title: 'Changed modal title' });
      modalOpen(true, wrapper);
    });

    it('throws an error when an invalid parentSelector prop is passed', () => {
      expect(() => {
        wrapper = shallow(<Modal
          {...defaultProps}
          parentSelector="this-selector-does-not-exist"
        />);
      }).toThrow('Modal received invalid parentSelector: this-selector-does-not-exist, no matching element found');
    });
  });

  describe('close functions properly', () => {
    beforeEach(() => {
      wrapper = mount(<Modal {...defaultProps} />);
    });

    it('closes when x button pressed', () => {
      modalOpen(true, wrapper);
      wrapper.find('button').at(0).simulate('click');
      modalOpen(false, wrapper);
    });

    it('closes when Close button pressed', () => {
      modalOpen(true, wrapper);
      wrapper.find('button').at(1).simulate('click');
      modalOpen(false, wrapper);
    });

    it('closes when Escape key pressed', () => {
      modalOpen(true, wrapper);
      wrapper.find('button').at(0).simulate('keyDown', { key: 'Escape' });
      modalOpen(false, wrapper);
    });

    it('closes when a user clicks outside of the modal', () => {
      modalOpen(true, wrapper);
      wrapper.find('.modal').at(0).simulate('click');
      modalOpen(false, wrapper);
    });

    it('calls callback function on close', () => {
      const spy = jest.fn();

      wrapper = mount(<Modal
        {...defaultProps}
        onClose={spy}
      />);

      expect(spy).toHaveBeenCalledTimes(0);

      // press X button
      wrapper.find('button').at(0).simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('reopens after closed', () => {
      modalOpen(true, wrapper);
      wrapper.find('button').at(0).simulate('click');
      modalOpen(false, wrapper);
      wrapper.setProps({ open: true });
      modalOpen(true, wrapper);
    });
  });
  describe('invalid keystrokes do nothing', () => {
    beforeEach(() => {
      wrapper = mount(<Modal
        {...defaultProps}
      />);
    });

    it('does nothing on invalid keystroke q', () => {
      let buttons = wrapper.find('button');

      expect(buttons.at(0).html()).toEqual(document.activeElement.outerHTML);
      modalOpen(true, wrapper);
      buttons.at(0).simulate('keyDown', { key: 'q' });
      buttons = wrapper.find('button');

      expect(buttons.at(0).html()).toEqual(document.activeElement.outerHTML);
      modalOpen(true, wrapper);
    });

    it('does nothing on invalid keystroke + ctrl', () => {
      const buttons = wrapper.find('button');

      expect(buttons.at(0).html()).toEqual(document.activeElement.outerHTML);
      modalOpen(true, wrapper);
      buttons.at(0).simulate('keyDown', { key: 'Tab', ctrlKey: true });
      expect(buttons.at(0).html()).toEqual(document.activeElement.outerHTML);
      modalOpen(true, wrapper);
    });
  });
  describe('focus changes correctly', () => {
    let buttons;

    beforeEach(() => {
      wrapper = mount(<Modal {...defaultProps} />);

      buttons = wrapper.find('button');
    });

    it('has correct initial focus', () => {
      expect(buttons.at(0).html()).toEqual(document.activeElement.outerHTML);
    });

    it('has reset focus after close and reopen', () => {
      expect(buttons.at(0).html()).toEqual(document.activeElement.outerHTML);
      wrapper.setProps({ open: false });
      modalOpen(false, wrapper);
      wrapper.setProps({ open: true });
      modalOpen(true, wrapper);
      expect(buttons.at(0).html()).toEqual(document.activeElement.outerHTML);
    });

    it('traps focus forwards on tab keystroke', () => {
      expect(buttons.at(0).html()).toEqual(document.activeElement.outerHTML);
      buttons.last().simulate('keyDown', { key: 'Tab' });
      expect(buttons.at(0).html()).toEqual(document.activeElement.outerHTML);
    });

    it('traps focus backwards on shift + tab keystroke', () => {
      expect(buttons.at(0).html()).toEqual(document.activeElement.outerHTML);
      buttons.at(0).simulate('keyDown', { key: 'Tab', shiftKey: true });
      expect(buttons.last().html()).toEqual(document.activeElement.outerHTML);
    });
  });
});
