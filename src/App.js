
import './App.css';

import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <News pageSize />
      </div>
    )
  }
}
