import React from 'react';

const Todos = ({ todos, deleteTodo }) => {

    const todoList = todos.length !== 0 ? (
        todos.map( (todo, i) => {
            return(
                <div className= "collection-item" key={i}>
                    <span onClick={ () => {deleteTodo(todo.id)}}>{todo.content}</span>
                    
                </div>
            )
        })
    ) : (
        <p className="center">You have No todo's left, Yay!</p>
    )
    return (
        <div className="todos collection">
        { todoList }

        </div>
    )
}

export default Todos;