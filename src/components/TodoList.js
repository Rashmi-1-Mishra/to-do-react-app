import React from 'react';
import { Component } from 'react';
import TodoItem from './TodoItem.js';

class TodoList extends Component {
  constructor(){
    super();
    var today = new Date()
    var date = today.getDate()+"-"+(today.getMonth()+1)+"-"+today.getFullYear();
    var time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    this.state = {
      currentDate : date,
      currentTime : time
    }
  }

  render(){
    return(
      <>
      {this.props.data.map(dataItem => <TodoItem onClick={this.props.onClick} label={dataItem} currDate={this.state.currentDate}
        currTime={this.state.currentTime}/>)}

      </>
    )
  }
}
export default TodoList;
