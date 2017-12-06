import React, { Component } from 'react';
import './App.css';

class Nav extends Component {

  render() {

    return (
      <div className={`Nav ${this.props.navClass}`}>
      <div className="glyphicon glyphicon-backward"></div>
      {this.props.play === false ? (
        <div onClick={this.props.music} className="glyphicon glyphicon-play"></div>
      ) : (
        <div onClick={this.props.music} className="glyphicon glyphicon-pause"></div>

      )}
      <div className="glyphicon glyphicon-forward"></div>

      </div>

    );
  }
}

export default Nav;
