import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id : 1, content: ' buy some milk'},
      {id : 2, content: ' play FIFA'}
    ]
  }
 addTodo = (todo) => {
      todo.id = Math.random(1, 300);
      let todos = [ ...this.state.todos, todo]
      this.setState({
        todos
      })
 }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter( todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-App container">
        <h1 className=" center blue-text">Todo's</h1>
        <Todos todos={ this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;