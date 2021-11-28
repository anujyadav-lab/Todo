import React from 'react'
import ToDoList from './ToDoList';
export default addToEnd() 
{
    const date = new Date();
    const nextId = this.state.todoCounter + 1;
    const newList = [
      ...this.state.list,
      {id: nextId, createdAt: date},
    ];
    this.setState({
      list: newList,
      todoCounter: nextId,
    });
  }
