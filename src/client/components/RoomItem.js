import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';

const cx = classNames;

export default class RoomItem extends Component {
  constructor(props) {
    super(props);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onDestroyClick = this.onDestroyClick.bind(this);
  }

  onIncrement() {
    const { id, index, onIncrement } = this.props;
    onIncrement(id, index);
  }

  onDecrement() {
    const { id, index, onDecrement } = this.props;
    onDecrement(id, index);
  }

  onDestroyClick() {
    const { id, index, onDestroy } = this.props;
    onDestroy(id, index);
  }

  render() {
    return (
      <li className={'room-item'} key={this.props.id}>
        <span className={'room'}>{this.props.text}</span>
        <button className={
          cx('button', 'increment')
        } onClick={this.onIncrement}>+</button>
        <button className={
          cx('button', 'decrement')
        } onClick={this.onDecrement}>-</button>
        <button className={
          cx('button', 'destroy')
        } onClick={this.onDestroyClick}>{String.fromCharCode(215)}</button>
      </li>
    );
  }
}

RoomItem.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDestroy: PropTypes.func.isRequired
};