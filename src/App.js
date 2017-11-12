import React, { Component } from 'react'
import PageA from './components/PageA'
import PageB from './components/PageB'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>webpack react startkit </h1>
        <PageA/>
        <PageB/>
      </div>
    )
  }
}
