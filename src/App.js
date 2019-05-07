import React, { Component } from 'react';
import Todos from './Todos';
import AddForm from './AddForm';

class App extends Component {
  state = {
    todos:[
      {content: 'Buy some protein bars', id: 1,},
      {content: 'Eat some protein bars', id: 2,}
    ]
  }
  deleteTodo = (id) => {
      const todos = this.state.todos.filter((todo) => {
        return todo.id != id;
      });
      this.setState({
        // todos: todos
        todos
      })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos}  deleteTodo={this.deleteTodo}/>    
        <AddForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
