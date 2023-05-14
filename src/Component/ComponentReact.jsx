import React, { Component } from 'react'
import ComponentForm from './ComponentForm'
import ComponentProfile from './ComponentProfile'

export default class ComponentReact extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <ComponentForm />
        <ComponentProfile />
      </div>
    )
  }
}
