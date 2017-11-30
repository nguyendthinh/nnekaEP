import React, { Component } from 'react';
import './App.css';

class Disk extends Component {
  render() {
    return (
      <div style={this.props.divStyle} className={`Disk ${this.props.currentClass}`}>
        Disk
        <div></div>
      </div>
    );
  }
}

export default Disk;
