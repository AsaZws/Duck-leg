import React, { Component } from 'react';
import Counter from './components/counter';
import Timer from './components/timer';
import './parents.css';

class Parents extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="parents">
        <h2>Parents组件</h2>
        <Timer></Timer>
        <Counter></Counter>
      </div>
     );
  }
}
 
export default Parents;