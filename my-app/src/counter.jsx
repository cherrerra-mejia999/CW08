import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className="counter-container">
        <h2>Counter</h2>
        <p className="count-display">Count: {this.state.count}</p>
        <button 
          className="increment-button" 
          onClick={this.incrementCount}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;