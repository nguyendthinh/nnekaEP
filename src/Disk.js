import React, { Component } from 'react';
import './App.css';

class Disk extends Component {

  render() {

    var audio = document.getElementById('audio')

    return (
      <div style={this.props.divStyle} className={`Disk Back ${this.props.currentClass}`}>
        <div id="spinDiv"></div>
          <div id="diskControls">

            <div onClick={this.props.backTrack} className="glyphicon glyphicon-backward"></div>

              {this.props.play === false ? (
                <div onClick={this.props.music} className="glyphicon glyphicon-play"></div>
              ) : (
                <div onClick={this.props.music} className="glyphicon glyphicon-pause"></div>

              )}

            <div onClick={this.props.nextTrack} className="glyphicon glyphicon-forward"></div>
          </div>

        <audio onEnded={this.props.changeTrack} id="audio" src={this.props.currentSong}></audio>
      </div>
    );
  }
}

export default Disk;
