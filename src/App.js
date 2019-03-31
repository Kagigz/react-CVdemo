import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComputerVision from './components/computervision';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="title">
          <h1>Computer Vision API Demo</h1>
        </header>
        <div id="subtitle">Upload an image and detect what's on it thanks to the Computer Vision API</div>
        <ComputerVision/>
      </div>
    );
  }
}

export default App;
