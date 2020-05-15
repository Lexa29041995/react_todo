import React from 'react';

import './AppHeader.css';

const AppHeader = (props) => {
    const appHeaderStyles = {
      fonntSize: '40 px',
      color:'red' 
    }
    const { toDo, done} = props
    return (
      <div className = 'AppHeader'>
        <h1 style = {appHeaderStyles}>Todo List</h1>
        <p className = 'todoCounter'> 
          <span>to do - {toDo}</span>
          <span>done - {done}</span>
        </p>
      </div>
    ) 
  }

  export default AppHeader;