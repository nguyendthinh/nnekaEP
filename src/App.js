import React, { Component } from 'react';
import './App.css';
import Cover from './Cover.js'
import Disk from './Disk.js'
import Booklet from './Booklet.js'
import Nav from './Nav.js'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      currentClass: '',
      navClass: '',
      play: false
    }
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
          console.log('works')
          return;
        }
        this.setState({
          navClass: 'slideUp'
        })
        setTimeout( function() {
          self.setState({
            navClass: ''
          })
        }, 500);
      }

    }.bind(this))

  }

  showContent(){
    this.setState({
      currentClass: 'slideDown',
    })
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

  render() {

    const divStyle = {
      WebkitTransition: 'all',
      msTransition: 'all'
    };

    return (
      <div className="App">
        <Nav play={this.state.play} music={this.music.bind(this)} navClass={this.state.navClass}/>
        <Cover showContent={this.showContent.bind(this)}/>
        <Disk play={this.state.play} music={this.music.bind(this)} divStyle={divStyle} currentClass={this.state.currentClass}/>
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
