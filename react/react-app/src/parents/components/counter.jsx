import React, { Component } from "react";

class Counter extends Component {
  state = { 
    count: 0,
    tags: [
      'tags1',
      'tags2',
      'tags3'
    ]
  }

  render() { 
    return <div>
      <p>{this.state.count}</p>
      <button 
        onClick={this.handleIncrement}>
          +1
      </button>
      <button 
        onClick={this.handleSubtract}>
          -1
      </button>
      <div>{this.renderTags()}</div>
    </div>
  }
  
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }
  handleSubtract = () => {
    this.setState({ count: this.state.count - 1 })
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>) }</ul>
  }
}
 
export default Counter;