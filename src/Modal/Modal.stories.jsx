import PropTypes from 'prop-types';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Modal from './index';
import Button from '../Button';
import Icon from '../Icon';
import InputText from '../InputText';
import Variant from '../utils/constants';

import README from './README.md';

class ModalWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.resetModalWrapperState = this.resetModalWrapperState.bind(this);

    this.state = { open: false };
  }

  openModal() {
    this.setState({ open: true });
  }

  resetModalWrapperState() {
    this.setState({ open: false });
    this.button.focus();
  }

  render() {
    return (
      <div>
        <Modal
          open={this.state.open}
          title={this.props.title}
          body={this.props.body}
          parentSelector={this.props.parentSelector}
          onClose={this.resetModalWrapperState}
        />
        <Button
          onClick={this.openModal}
          buttonType="light"
          inputRef={(input) => { this.button = input; }}
        >
          Click me to open a modal!
        </Button>
      </div>
    );
  }
}

ModalWrapper.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  parentSelector: PropTypes.string,
};

ModalWrapper.defaultProps = {
  parentSelector: 'body',
};

storiesOf('Modal', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <Modal
      open
      title="Modal title."
      body="Modal body."
      onClose={() => {}}
    />
  ))
  .add('configurable buttons', () => (
    <Modal
      open
      title="Modal title."
      body="Modal body."
      buttons={[
        <Button buttonType="primary">Blue button!</Button>,
        {
          label: 'Red button!',
          buttonType: 'danger',
        },
        <Button buttonType="success">Green button!</Button>,
      ]}
      onClose={() => {}}
    />
  ))
  .add('configurable title and body', () => (
    <Modal
      open
      title="Custom title!"
      body="Custom body!"
      buttons={[
        <Button buttonType="dark">Dark button!</Button>,
      ]}
      onClose={() => {}}
    />
  ))
  .add('configurable buttons that perform actions', () => (
    <Modal
      open
      title="Modal title."
      body="Modal body."
      buttons={[
        <Button
          buttonType="light"
          onClick={action('button-click')}
        >
          Click me and check the console!
        </Button>,
      ]}
      onClose={() => {}}
    />
  ))
  .add('configurable close button string', () => (
    <Modal
      open
      title="Modal title."
      body="Modal body."
      closeText="SHOO!"
      onClose={() => {}}
    />
  ))
  .add('configurable close button element', () => (
    <Modal
      open
      title="Modal title."
      body="Modal body."
      closeText={
        <Icon
          className="fa fa-ship"
          screenReaderText="Close"
        />}
      onClose={() => {}}
    />
  ))
  .add('modal invoked via a button', () => (
    <ModalWrapper
      title="I am the modal!"
      body="I was invoked by a button!"
    />
  ))
  .add('modal with element body', () => (
    <Modal
      open
      title="Modal title."
      body={(
        <div>
          <p>Enter your e-mail address to receive free cat facts!</p>
          <InputText
            name="e-mail"
            label="E-Mail Address"
          />
          <Button>Get my facts!</Button>
        </div>
      )}
      onClose={() => {}}
    />
  ))
  .add('modal without a close button in the header', () => (
    <Modal
      open
      title="Modal title."
      body="Modal body."
      onClose={() => {}}
      renderHeaderCloseButton={false}
    />
  ))
  .add('modal with warning variant', () => (
    <Modal
      open
      title="Warning Modal"
      body={(
        <p>Be careful! It is dangerous ahead.</p>
      )}
      closeText="Run Away!"
      buttons={[
        <Button buttonType="light">Continue anyway...</Button>,
      ]}
      onClose={() => {}}
      variant={{ status: Variant.status.WARNING }}
    />
  ))
  .add('modal inside special div', () => (
    <div>
      <div>
        <div className="special-div" />
      </div>
      <ModalWrapper
        title="I am the modal!"
        body="I was invoked by a button!"
        parentSelector=".special-div"
      />
    </div>
  ))
  .add('two modals with the same target', () => (
    <div>
      <div>
        <div className="target-div" />
      </div>
      <ModalWrapper
        title="I am the first modal!"
        body="I target one"
        parentSelector=".target-div"
      />
      <ModalWrapper
        title="I am the second modal!"
        body="I target one"
        parentSelector=".target-div"
      />
    </div>
  ))
  .add('two modals with seperate targets', () => (
    <div>
      <div>
        <div className="target-div-one" />
        <div className="target-div-two" />
      </div>
      <ModalWrapper
        title="I am the first modal!"
        body="I target one"
        parentSelector=".target-div-one"
      />
      <ModalWrapper
        title="I am the second modal!"
        body="I target two"
        parentSelector=".target-div-two"
      />
    </div>
  ))
  .add('modal with overflowing content', () => (
    <Modal
      open
      title="Modal title."
      body={'Overflowing body. '.repeat(600)}
      onClose={() => {}}
    />
  ))
  .add('modal with custom onclose funtion', () => (
    <Modal
      open
      title="Modal title."
      body="Click close and see what happens ;)"
      onClose={action('Look, things happened!')}
    />
  ));
