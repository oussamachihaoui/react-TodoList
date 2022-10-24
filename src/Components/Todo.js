import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
  constructor(props){
    super(props)
    this.state={
      isEdit : false , plan : this.props.todo
    }
    this.handleEdit=this.handleEdit.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleDone=this.handleDone.bind(this)
    
  }

  handleEdit(){
    this.setState({
      isEdit : !this.state.isEdit
    })
  }

  handleChange(evt){
    this.setState({
        plan : evt.target.value
    })
  }

  handleSubmit(evt){
    evt.preventDefault()
    this.props.updateTodo(this.props.id , this.state.plan)
    this.setState({
      isEdit : false
    })
  }


  handleDone(){
    this.props.doneTodo(this.props.id)
  }
  

  render() {
    let result ;
    if(this.state.isEdit){
      result = (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input 
            type='text'
            onChange={this.handleChange}
            value={this.state.plan}
            />
            <button>Save</button>
          </form>
        </div>
      )
    } else{
      result =(
          <div className='Todo'>
            <div>
                <li className={this.props.done ? 'done' : ''} onClick={this.handleDone} >
                  {this.props.todo}
                  </li>  
                <button onClick={this.props.removeTodo}>X</button>
                <button onClick={this.handleEdit} >Edit</button>
            </div>
    
          </div>
      )
    }
    return result;
  }
}
