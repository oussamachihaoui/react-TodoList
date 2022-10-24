import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default class TodoListForm extends Component {
    constructor(props){
        super(props)
        this.state={plan :''}
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }



    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }


    handleSubmit(evt){
        evt.preventDefault()
        const newTodo = {...this.state , id : uuidv4() , done : false}
        this.props.create(newTodo)
        this.setState({
            plan :''
        })
    }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
            <label>New Todo</label>
            <input
            type='text'
            name='plan'
            id='plan'
            placeholder='New todo'
            value={this.state.plan}
            onChange={this.handleChange}
            />
            <button>Add todo</button>
        </form>
      </div>
    )
  }
}
