import React from "react";

export default addToStart() 
{
    const date = new Date();
    const nextId = this.state.todoCounter + 1;
    const newList = [
      {id: nextId, createdAt: date},
      ...this.state.list,
    ];
    this.setState({
      list: newList,
      todoCounter: nextId,
    });
  }
