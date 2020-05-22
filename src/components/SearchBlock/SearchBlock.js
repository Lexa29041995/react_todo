import React from 'react';
import './SearchBlock.css';



class SearchBlock extends React.Component {
  state ={
    detectedText: '',
  };

  onSearchChange = (event) =>{
    const detectedText = event.target.value;
    this.setState({ detectedText });
    this.props.onSearchChange(detectedText);
  }
    
    render() {
      const searchBlockText = 'What do you want to search?';

      return (
        <div className = 'SearchBlock d-flex'>
          <input  
            className = 'form-control mr-3' 
            placeholder = {searchBlockText}
            value = {this.state.detectedText} 
            onChange = {this.onSearchChange}/>
        </div>
        );
      }
    }

    

  export default SearchBlock;