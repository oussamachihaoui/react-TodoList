import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <div className='Todo'>
        <div>
            <li>{this.props.todo}</li>  
            <button onClick={this.props.removeTodo}>X</button>
            <button>Edit</button>
        </div>

      </div>
    )
  }
}
