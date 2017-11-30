import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cover from './Cover.js'
import Disk from './Disk.js'
import Booklet from './Booklet.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      currentClass: ''
    }
  }

  showContent(){
    this.setState({
      currentClass: 'slideDown'
    })
  }

  render() {

    const divStyle = {
      WebkitTransition: 'all',
      msTransition: 'all'
    };

    return (
      <div className="App">
        <Cover showContent={this.showContent.bind(this)}/>

          <Disk divStyle={divStyle} currentClass={this.state.currentClass}/>
          <Booklet divStyle={divStyle} currentClass={this.state.currentClass}/>
      </div>
    );
  }
}

export default App;
