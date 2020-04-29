import React from 'react';
import ToDoListItem from '../ToDoListItem';

const TodoList = () => {
    const items = ['Learn JS ', 'Learn REACT']
    return (
    <ul>
    <li><ToDoListItem /></li>
    <li>< ToDoListItem /></li>
  </ul>);
  }

  export default TodoList;