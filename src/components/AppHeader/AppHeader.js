import React from 'react';

import './AppHeader.css';

const AppHeader = () => {
    const appHeaderStyles = {
      fonntSize: '40 px',
      color:'red' 
    }
    return <h1 style = {appHeaderStyles}>Todo List</h1>;
  }

  export default AppHeader;