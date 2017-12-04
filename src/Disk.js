import React, { Component } from 'react';
import './App.css';

import mp3_file from './audio/SampleOne.mp3'
import mp3_file2 from './audio/SampleTwo.mp3'

class Disk extends Component {

  constructor(props){
    super(props)
    this.state = {
      play: false,
      trackTracker: 0,
      currentSong: mp3_file
    }
    this.trackList = [mp3_file, mp3_file2]
  }

  music(){
    var audio = document.getElementById('audio');
    var spinDiv = document.getElementById('spinDiv');
    if (this.state.play === false) {
      this.setState({
        play: true
      })
      audio.play()
      spinDiv.classList.remove('stopSpin');
      spinDiv.classList.add('spin');
    } else {
      this.setState({
        play: false
      })
      audio.pause()
      spinDiv.classList.add('stopSpin');
    }
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
        <div>
          {this.state.play === false ? (
            <div onClick={this.music.bind(this)} className="glyphicon glyphicon-play"></div>
          ) : (
            <div onClick={this.music.bind(this)} className="glyphicon glyphicon-pause"></div>

          )}

        </div>
        <audio onEnded={this.changeTrack.bind(this)} id="audio" src={this.state.currentSong} controls></audio>
      </div>
    );
  }
}

export default Disk;
