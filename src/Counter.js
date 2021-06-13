
import React from 'react';
class Counter extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <button onClick={this.props.resetOffset}>Reset</button>

            <button onClick={this.props.decrement}>Decrement</button>
            <h2>{this.props.offset}</h2>
            <button onClick={this.props.increment}>Increment</button>
    
          <button onClick={this.props.offsetString}>Encrypt</button>
        </div>
      );
    }
  };
  export default Counter
  