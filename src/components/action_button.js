import React, { Component } from 'react';
import { string, func } from 'prop-types';
import { capitalizeFirstLetter } from '../utils/strings';


export const ACTION_START = 'start';
export const ACTION_STOP = 'stop';


class ActionButton extends Component {

  static propTypes = {
    actionType: string.isRequired,
    onClick: func.isRequired
  }

  static defaultProps = {
    actionType: ACTION_START,
    onClick: (e) => e.preventDefault()
  }


  render() {
    const { onClick } = this.props;

    return (
      <button type="button" className={this.ButtonClassName} onClick={onClick}>
        {this.ButtonText}
      </button>
    );
  }

  get ButtonClassName() {
    const base = 'btn btn-lg';

    switch (this.props.actionType) {
      case ACTION_START:
        return `${base} btn-success`;
      case ACTION_STOP:
        return `${base} btn-danger`;
      default:
        return base;
    }
  }

  get ButtonText() {
    return capitalizeFirstLetter(this.props.actionType);
  }
}


export default ActionButton;
