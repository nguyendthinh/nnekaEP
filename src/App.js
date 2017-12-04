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
      currentClass: ''
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', function(){

      console.log(window.screenY)
    })
  }

  showContent(){
    this.setState({
      currentClass: 'slideDown'
    })
  }

  test(){
    console.log(window.innerHeight)
  }

  render() {

    const divStyle = {
      WebkitTransition: 'all',
      msTransition: 'all'
    };

    return (
      <div className="App">
        <Nav />
        <Cover showContent={this.showContent.bind(this)}/>
        <Disk divStyle={divStyle} currentClass={this.state.currentClass}/>
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
