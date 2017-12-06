import React, { Component } from 'react';
import './App.css';

import mp3_file from './audio/SampleOne.mp3'
import mp3_file2 from './audio/SampleTwo.mp3'

class Disk extends Component {

  constructor(props){
    super(props)
    this.state = {
      trackTracker: 0,
      currentSong: mp3_file
    }
    this.trackList = [mp3_file, mp3_file2]
  }

  changeTrack(){
    console.log('works')
    var audio = document.getElementById('audio');

      if (this.state.trackTracker === 0) {
        var newSong = this.state.trackTracker + 1;
        this.setState({
          trackTracker: newSong,
          currentSong: this.trackList[newSong]
        })
        setTimeout( function() {
          audio.play();
        }, 1);
      } else if (this.state.trackTracker === 1) {
        this.setState({
          currentSong: mp3_file,
          trackTracker: 0
        })
        setTimeout( function() {
          audio.play();
        }, 1);
      }
  }

  render() {

    var audio = document.getElementById('audio')

    return (
      <div style={this.props.divStyle} className={`Disk ${this.props.currentClass}`}>
        <div id="spinDiv"></div>
        <div className="glyphicon glyphicon-backward"></div>
        <div>
          {this.props.play === false ? (
            <div onClick={this.props.music} className="glyphicon glyphicon-play"></div>
          ) : (
            <div onClick={this.props.music} className="glyphicon glyphicon-pause"></div>

          )}

        </div>
        <div className="glyphicon glyphicon-forward"></div>

        <audio onEnded={this.changeTrack.bind(this)} id="audio" src={this.state.currentSong}></audio>
      </div>
    );
  }
}

export default Disk;
