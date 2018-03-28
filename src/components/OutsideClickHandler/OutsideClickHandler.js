import React, { Component } from 'react';

class OutsideClickHandler extends Component {
  constructor() {
    super();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.handleClick && this.props.handleClick();
    }
  }

  render() {
    return (
      <div ref={n => this.wrapperRef = n}>
        {this.props.children}
      </div>
    );
  }
}

export default OutsideClickHandler;
