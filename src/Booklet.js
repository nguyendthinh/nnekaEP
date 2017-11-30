import React, { Component } from 'react';
import './App.css';
import Page from './Page.js'

class Booklet extends Component {
  render() {
    return (
      <div style={this.props.divStyle} className={`Booklet ${this.props.currentClass}`}>
        <Page></Page>
        Booklet
        <Page></Page>
      </div>
    );
  }
}

export default Booklet;
