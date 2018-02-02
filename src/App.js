import React, { Component } from 'react';
//import { Route } from 'react-router-dom'
import ListContacts from './ListContacts'
//import CreateContact from './CreateContact'
//import * as ContactsAPI from './utils/ContactsAPI'

const contacts =   [
{
    id: 'ryan',
    name: 'Ryan Florence',
    email: 'ryan@reacttraining.com',
    avatarURL:'http://localhost:5001/ryan.jpg'
  },
  {
    id: 'michael',
    name: 'Michael Jackson',
    email: 'michael@reacttraining.com',
    avatarURL:'http://localhost:5001/michael.jpg'
  },
  {
    id: 'tyler',
    name: 'Tyler McGinnis',
    email: 'tyler@reacttraining.com',
    avatarURL: 'http://localhost:5001/tyler.jpg'
  }
]
class App extends Component {
/*  state = {
    contacts: []
  }*/


  render() {
    return (
      <div>
        <ListContacts contacts={contacts} />
      </div>
    )
  }
}

export default App;
