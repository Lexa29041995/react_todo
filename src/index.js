import  React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchBlock from './components/SearchBlock/SearchBlock';
import TodoList from './components/ToDoList';


const App = () => {

  const todoData = [
    {label:'Learn HTML', important:true, id: 1,},
    {label:'Learn JS', important:true, id: 2,},
    {label:'Learn REACT', important:false, id: 3,}
  ];

  return (
  <div>
    <div>
      <AppHeader />
      <SearchBlock />
      <TodoList todoItems = {todoData} />
    </div>
  </div>  
);
}

ReactDOM.render(<App /> , document.getElementById('root'));

