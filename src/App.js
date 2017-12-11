import React, { Component } from 'react';
import './App.css';
import Cover from './Cover.js'
import Disk from './Disk.js'
import Booklet from './Booklet.js'
import Nav from './Nav.js'

import mp3_file from './audio/SampleOne.mp3'
import mp3_file2 from './audio/SampleTwo.mp3'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      currentClass: '',
      navClass: '',
      play: false,
      trackTracker: 0,
      currentSong: mp3_file
    }
    this.trackList = [mp3_file, mp3_file2]

  }

  componentDidMount(){
    var self = this;
    window.addEventListener('scroll', function(){

      if (window.pageYOffset >= 500) {
        this.setState({
          navClass: 'slideDown'
        })
      } else {
        var nav = document.querySelector('.Nav.slideDown')
        if (nav === null){
          return;
        }
        this.setState({
          navClass: 'slideUp'
        })
        setTimeout( function() {
          self.setState({
            navClass: ''
          })
        }, 400);
      }

    }.bind(this))

  }

  showContent(){
    this.setState({
      currentClass: 'slideDown',
    })
  }

  music(event){
    event.stopPropagation();
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

  nextTrack(event){
    event.stopPropagation();

    if (this.state.trackTracker === 1) {
      return;
    }
    var audio = document.getElementById('audio');
    audio.pause()
    var changeSong = this.state.trackTracker + 1;
    this.setState({
      trackTracker: changeSong,
      currentSong: this.trackList[changeSong]
    })
    setTimeout( function() {
      audio.play();
    }, 1);
  }

  backTrack(event){
    event.stopPropagation();

    if (this.state.trackTracker === 0) {
      return;
    }
    var audio = document.getElementById('audio');
    audio.pause()
    var changeSong = this.state.trackTracker - 1;
    this.setState({
      trackTracker: changeSong,
      currentSong: this.trackList[changeSong]
    })
    setTimeout( function() {
      audio.play();
    }, 1);
  }

  changeTrack(){
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

  flipAnimation(event){
    event.stopPropagation();

    var flipper = document.getElementById('flip-container')
    flipper.classList.toggle("hover");
  }

  render() {

    const divStyle = {
      WebkitTransition: 'all',
      msTransition: 'all'
    };

    return (
      <div className="App">

          <Nav nextTrack={this.nextTrack.bind(this)}
          backTrack={this.backTrack.bind(this)}
          play={this.state.play}
          music={this.music.bind(this)}
          navClass={this.state.navClass}/>

          <div id="flip-container" onClick={this.flipAnimation}>
            <div id="flipper">
              <Cover showContent={this.showContent.bind(this)}/>

              <Disk play={this.state.play}
              nextTrack={this.nextTrack.bind(this)}
              backTrack={this.backTrack.bind(this)}
              music={this.music.bind(this)}
              changeTrack={this.changeTrack.bind(this)}
              divStyle={divStyle}
              currentClass={this.state.currentClass}
              currentSong={this.state.currentSong}/>
            </div>
          </div>


          <Booklet divStyle={divStyle} currentClass={this.state.currentClass}/>
          <Booklet divStyle={divStyle} currentClass={this.state.currentClass}/>
          <Booklet divStyle={divStyle} currentClass={this.state.currentClass}/>
          <Booklet divStyle={divStyle} currentClass={this.state.currentClass}/>
              <Booklet divStyle={divStyle} currentClass={this.state.currentClass}/>
              <Booklet divStyle={divStyle} currentClass={this.state.currentClass}/>
              <Booklet divStyle={divStyle} currentClass={this.state.currentClass}/>
              <Booklet divStyle={divStyle} currentClass={this.state.currentClass}/>

      </div>
    );
  }
}

export default App;
