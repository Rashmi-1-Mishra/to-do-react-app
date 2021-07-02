import React from 'react';
import {Component } from 'react';
import '../Css/ToDo.css';
import InputArea from './InputArea.js';
import Button from './Button.js';
import Header from './Header.js';
import TodoList from './TodoList.js';

class ToDo extends Component {

  constructor(){
    super();
    this.state = ({
      data: []
    });
    this.clickHandle = this.clickHandle.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  clickHandle(e){
    if(document.querySelector('.InputArea').firstChild.data !== ""){
      this.setState({
        data: [...this.state.data , document.querySelector('.InputArea').firstChild.data],
      });
    }

    document.querySelector('.InputArea').firstChild.data=""
  }

  handleRemove(id){
    const remainder = this.state.data.filter((todo) =>{
      if(todo !== id.currentTarget.childNodes[0].data) return todo;
    });
    this.setState({data:remainder});
  }

  render(){
    return(
      <>
      <Header label="To-Do"/>
      <div className= "to-do-section">
      <div  className="grid-items">
      <InputArea placeholder="enter text ..." />
        <Button label="Submit" onClick={this.clickHandle}/>
        </div>
      </div>
      <TodoList data={this.state.data} onClick={this.handleRemove}/>
      </>
    )
  }
}
export default ToDo;
