import React, { Component } from 'react'
import './App.css'
import TodoList from './Components/TodoList'
export default class App extends Component {
  render() {
    return (
      <div className=''>
        <TodoList/>
      </div>
    )
  }
}
