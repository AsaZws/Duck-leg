import React, { Component } from 'react';
import Parents from './parents/parents';
import './App.css';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
        <h1>App组件</h1>
        <Parents></Parents>
      </div>
     );
  }
}
 
export default App;
