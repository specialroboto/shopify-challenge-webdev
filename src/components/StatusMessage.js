import React, { Component } from 'react';

class Status extends Component {
  render() {
    return (
      <div className="message">{this.props.text}</div>
    );
  }
}

export default Status;