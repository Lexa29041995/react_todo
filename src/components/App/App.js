import React from 'react';

import './App.css';
import AppHeader from '../AppHeader';
import SearchBlock from '../SearchBlock';
import TodoList from '../ToDoList';
import ItemAddForm from '../ItemAddForm';

class App extends React.Component {
  
  ids = 10;

  state = {
      todoData: [
        {label:'Learn HTML', important:false, done:false, id: 1,},
        {label:'Learn JS', important:false, done:false, id: 2,},
        {label:'Learn REACT', important:false, done:false, id: 3,}
      ],
      detectedText: '',
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((elem) => elem.id === id)

      const newTodoData = [
        ...todoData.slice(0, index),
        ...todoData.slice(index+1)
      ];

      return {
        todoData: newTodoData
      }
    });
  }

  addItem = (text) => {
    const item = {
      label: text,
      important: false,
      id: this.ids++
    }

    this.setState(({ todoData }) => {
      const newArr = [...todoData, item];

      return {
        todoData: newArr
      }
    });
  }

  toggleProp = (id, arr, prop) => {
    const index = arr.findIndex((elem) => elem.id === id);

    const oldObject = arr[index];
    const newObj = {...oldObject, [prop]: !oldObject[prop]};

    return [
      ...arr.slice(0, index),
      newObj,
      ...arr.slice(index + 1)
    ];
  }
  
  toggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProp(id, todoData, 'done')
      }
    });
  }


  toggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProp(id, todoData, 'important')
      }
    });
  }

  search = (arr, detectedText) => {
    if (detectedText.length === 0) {
      return arr;
    }

    return arr.filter((el)=>{
      return el.label.indexOf(detectedText) > -1;
    });
  } 
  
  render() {

  const {todoData, detectedText} = this.state;
  const detectedItems = this.search(todoData, detectedText)
  const done = todoData.filter((el) => el.done).length;
  const todo = todoData.length - done;

    return (
    <div className ='App'>
      <AppHeader toDo = {todo} done = {done}/>
      <SearchBlock />
      <TodoList 
        todoItems = {detectedItems} 
        onDelete= {this.deleteItem}
        onToggleImportant = {this.toggleImportant}
        onToggleDone = {this.toggleDone} 
      />
      <ItemAddForm onItemAdd = {this.addItem}/>
    </div>
   
    );
  }
}



export default App;