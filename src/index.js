import  React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchBlock from './components/SearchBlock';
import TodoList from './components/ToDoList';


const App = () => {
  return (
  <div>
    <div>
      <AppHeader />
      <SearchBlock />
      <TodoList />
      <SearchBlock />
    </div>
    <div>
      <p>Lorem qweqwecr  sd fds q </p>
    </div>
    </div>  
);
}

ReactDOM.render(<App /> , document.getElementById('root'));

