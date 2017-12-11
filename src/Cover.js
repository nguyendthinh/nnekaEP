import React, { Component } from 'react';
import './App.css';

class Cover extends Component {

  render() {

    return (
      <div onClick={this.props.showContent} className="Cover Front">
        Cover

      </div>

    );
  }
}

export default Cover;
