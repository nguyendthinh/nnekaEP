import React, { Component } from 'react';
import './App.css';

class Disk extends Component {

  constructor(props){
    super(props)
    this.state = {
      play: false
    }
  }

  music(){
    console.log("working")
    if (this.state.play === false) {
      this.setState({
        play: true
      })
    } else {
      this.setState({
        play: false
      })
    }
  }

  render() {

    return (
      <div style={this.props.divStyle} className={`Disk ${this.props.currentClass}`}>
        <div>
          {this.state.play === false ? (
            <div onClick={this.music.bind(this)} className="glyphicon glyphicon-play"></div>
          ) : (
            <div onClick={this.music.bind(this)} className="glyphicon glyphicon-pause"></div>

          )}

        </div>
      </div>
    );
  }
}

export default Disk;
