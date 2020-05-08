import React from 'react';

import AppHeader from '../AppHeader';
import SearchBlock from '../SearchBlock';
import TodoList from '../ToDoList';
import './App.css';


const App = () => {

  const todoData = [
    {label:'Learn HTML', important:true, id: 1,},
    {label:'Learn JS', important:true, id: 2,},
    {label:'Learn REACT', important:false, id: 3,}
  ];

  return (
    <div className ='App'>
      <AppHeader />
      <SearchBlock />
      <TodoList todoItems = {todoData} />
    </div>
   
);
}

export default App;