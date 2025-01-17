import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import isRequiredIf from 'react-proptype-conditional-require';

import Button from '../Button';
import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';


class StatusAlert extends React.Component {
  constructor(props) {
    super(props);

    this.close = this.close.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.renderDialog = this.renderDialog.bind(this);

    this.state = {
      open: props.open,
    };
  }

  componentDidMount() {
    if (this.xButton) {
      this.xButton.focus();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.props.open) {
      this.setState({ open: nextProps.open });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.open && !prevState.open && this.xButton) {
      this.xButton.focus();
    }
  }

  focus() {
    this.xButton.focus();
  }

  close() {
    this.setState({ open: false });
    this.props.onClose();
  }

  handleKeyDown(e) {
    if (e.key === 'Enter' || e.key === 'Escape') {
      e.preventDefault();
      this.close();
    }
  }

  renderDialog() {
    const { dialog } = this.props;

    return (
      <div className="alert-dialog">
        { dialog }
      </div>
    );
  }

  renderDismissible() {
    const { closeButtonAriaLabel, dismissible } = this.props;

    return (dismissible) ? (
      <Button
        aria-label={closeButtonAriaLabel}
        inputRef={(input) => { this.xButton = input; }}
        onClick={this.close}
        onKeyDown={this.handleKeyDown}
        isClose
      >
        <span aria-hidden="true">&times;</span>
      </Button>
    ) : null;
  }

  render() {
    const { alertType, className, dismissible } = this.props;

    return (
      <div
        className={classNames([
          className,
          'alert',
          'fade',
        ], {
          'alert-dismissible': dismissible,
        }, {
          [`alert-${alertType}`]: alertType !== undefined,
        }, {
          show: this.state.open,
        })}
        role="alert"
        hidden={!this.state.open}
      >
        {this.renderDismissible()}
        {this.renderDialog()}
      </div>
    );
  }
}

StatusAlert.propTypes = {
  alertType: PropTypes.string,
  className: PropTypes.string,
  dialog: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  dismissible: PropTypes.bool,
  /* eslint-disable react/require-default-props */
  closeButtonAriaLabel: PropTypes.string,
  onClose: isRequiredIf(PropTypes.func, props => props.dismissible),
  open: PropTypes.bool,
};

StatusAlert.defaultProps = {
  alertType: 'warning',
  className: undefined,
  closeButtonAriaLabel: 'Close',
  dismissible: true,
  open: false,
};

export default withDeprecatedProps(StatusAlert, 'StatusAlert', {
  className: {
    deprType: DEPR_TYPES.FORMAT,
    expect: value => typeof value === 'string',
    transform: value => (Array.isArray(value) ? value.join(' ') : value),
    message: 'It should be a string.',
  },
});
