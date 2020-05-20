import React from 'react';

export default class ItemAddForm extends React.Component {
    
    state = {
        inputText: ''
    }

    onInputTextChange =(event) => {
        // console.log(event.target.value);
        this.setState({
            inputText: event.target.value.toUpperCase(),  
        })
    }

    onSubmit =(event) => {
        event.preventDefault();
        this.props.onItemAdd(this.state.inputText)
        this.setState({
            inputText: ''
        })
    }

    render() {
        return (
            <form
                className = 'ItemAddForm d-flex'
                onSubmit = {this.onSubmit}
            >
                <input 
                type ='text' 
                placeholder ='What are you going to do?'
                className = 'form-control mr-3'
                required
                onChange = {this.onInputTextChange}
                value = {this.state.inputText}
                />
                <button
                    type = 'submit' 
                    className = 'btn btn-outline-secondary'
                    >
                    Add
                </button>
            </form>
        )
    }
}
