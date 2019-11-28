 import React, { Component } from 'react';

class AddTodo extends Component{
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content : ''
        })
    }
    render() {
     return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>Add new todo:</label>
                <input type="text" name="addTodo" id='add' onChange={this.handleChange} value={this.state.content} required />
                <button className="text primary" onClick={this.handleSubmit}>Add Todo</button>
            </form>
        </div>
      )
    }
}

export default AddTodo