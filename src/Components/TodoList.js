import React, { Component } from 'react'
import Todo from './Todo'
import TodoListForm from './TodoListForm'
import './TodoList.css'

export default class TodoList extends Component {
    constructor(props){
        super(props)
        this.state={
            todos :[]
        }
        this.create=this.create.bind(this)
        this.updateTodo=this.updateTodo.bind(this)
        this.doneTodo=this.doneTodo.bind(this)
        
        
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

    updateTodo(id , newPlan){
        const updated = this.state.todos.map(td =>{
            if(td.id === id){
                return {...td , plan : newPlan}
            }
            return td;
        });
        this.setState({todos : updated})
    }

    doneTodo(id){
        const updated = this.state.todos.map(td =>{
            if(td.id === id){
                return {...td , done : !td.done}
            }
            return td;
        });
        this.setState({todos : updated})
    }


  render() {
    return (
      <div className='TodoList'>
        <h1>TodoList <span>a plain react app</span></h1>
        <ul>
            {this.state.todos.map(td =>(
            <Todo 
            todo={td.plan}
            key={td.id}
            id={td.id}
            removeTodo={() => this.removeTodo(td.id)}
            updateTodo={this.updateTodo}
            done={td.done}
            doneTodo={this.doneTodo}
            />
            ))}
        </ul>
        <TodoListForm create={this.create} />
    </div>
    )
  }
}
