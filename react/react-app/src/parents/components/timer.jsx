import React, { Component } from 'react';

class Timer extends Component {
  state = {  }

  constructor(props) {
    super(props);
    this.state = { seconds: 0 }
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  render() { 
    return ( 
      <div>
        网页打开时间: {this.state.seconds} s
      </div>
     );
  }
}
 
export default Timer;