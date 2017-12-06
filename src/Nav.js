import React, { Component } from 'react';
import './App.css';
import mp3_file from './audio/SampleOne.mp3'
import mp3_file2 from './audio/SampleTwo.mp3'

class Nav extends Component {

  render() {

    return (
      <div className={`Nav ${this.props.navClass}`}>
      {this.props.play === false ? (
        <div onClick={this.props.music} className="glyphicon glyphicon-play"></div>
      ) : (
        <div onClick={this.props.music} className="glyphicon glyphicon-pause"></div>

      )}

      </div>

    );
  }
}

export default Nav;
