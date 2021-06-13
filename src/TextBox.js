
import React from 'react';
class TextBox extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <textarea onChange={this.props.handleInput} value={this.props.value} />
        </div>
      );
    }
  };
export default TextBox;