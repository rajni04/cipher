import React from 'react';
import Counter from './Counter.js';
import TextBox from './TextBox';

class Cipher extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      input: '',
      offset:1,
      //key: 1,
      result: '',
      disabledButtons: true
    };

    this.handleInput = this.handleInput.bind(this);
    //this.changeKey = this.changeKey.bind(this);
    this.offsetString = this.offsetString.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.resetOffset = this.resetOffset.bind(this);
    this.codeText = this.codeText.bind(this);

  }

  handleInput(event) {
    this.setState({
      input: event.target.value
    });
  }
  offsetString() {
    const newStr = [...this.state.input].map(L => String.fromCharCode(L.charCodeAt(0)+this.state.offset)).join("");
    this.setState({
      output: newStr
    });
  }


  increment() {
    this.setState({
      offset: this.state.offset + 1
    });
  }

  decrement() {
    this.setState({
      offset: this.state.offset - 1
    });
  }

  resetOffset() {
    this.setState({
      offset: 0
    });
  }

 // changeKey(event) {
    //this.setState({key: event.target.value}, this.validateFields)
 // }

  codeText() {
    let result = this.state.sourceText.split('').map(e => {
      const code = e.charCodeAt(0)
      let step = this.state.key % 33;
      if (code >= 1040 && code <= 1071) {
        return (code + step) > 1071 ? String.fromCharCode(1039 + (step - (1071 - code))) : String.fromCharCode(code + step)
      } else if (code >= 1072 && code <= 1103) {
        return (code + step) > 1103 ? String.fromCharCode(1071 + (step - (1103 - code))) : String.fromCharCode(code + step)
      } else {
        return e;
      }
    }).join('');
    this.setState({result: result});
  }

  

  render() {
    return (
      <div>
        <label>Source text</label>
        <TextBox handleInput={this.handleInput} />
        <label>Key</label>
        <Counter offset={this.state.offset} offsetString={this.offsetString} increment={this.increment} decrement={this.decrement} resetOffset={this.resetOffset} />
        
        <label>Result</label>
        <TextBox value={this.state.output} />
      </div>
    )
  }
}

export default Cipher