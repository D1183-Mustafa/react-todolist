
import './App.css';
import React, { Component } from 'react'
import Header from './components/header/Header';
import Form from './components/form/Form';
import List from './components/list/List';

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Header/>
        <Form/>
        <List/>
      </div>
    )
  }
}


