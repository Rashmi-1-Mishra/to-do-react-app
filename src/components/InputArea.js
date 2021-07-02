import React from 'react';
import { Component } from 'react';
import '../Css/InputArea.css';

class InputArea extends Component {
  render(){
    return(
      <div className = "InputArea" contentEditable="true" data-placeholder={this.props.placeholder}>
      </div>
    )
  }
}
export default InputArea;
