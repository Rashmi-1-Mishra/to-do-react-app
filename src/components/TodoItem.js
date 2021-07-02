import React from 'react';
import { Component } from 'react';
import '../Css/TodoItem.css';

class TodoItem extends Component {
  render(){
    return(
      <div className="TodoItem" onClick={this.props.onClick}>
        {this.props.label}
        <div className="date-time">
          {this.props.currDate} {this.props.currTime}
        </div>
      </div>
    )
  }
}
export default TodoItem;
