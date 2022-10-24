import React, { Component } from 'react'
import Todo from './Todo'
import TodoListForm from './TodoListForm'
export default class TodoList extends Component {
    constructor(props){
        super(props)
        this.state={
            todos :[]
        }
        this.create=this.create.bind(this)
        
        
    }

    create(td){
        this.setState({
            todos :[...this.state.todos , td]
        })
    }

    removeTodo(id){
        this.setState({
            todos : this.state.todos.filter(td => td.id !== id )
        })
    }

  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <ul>
            {this.state.todos.map(td =>(
            <Todo 
            todo={td.plan}
            key={td.id}
            id={td.id}
            removeTodo={() => this.removeTodo(td.id)}
            />
            ))}
        </ul>
        <TodoListForm create={this.create} />
    </div>
    )
  }
}
