import React, { Component } from 'react';
import { CardList } from './components/CardList/CardList'

import SearchBox from './components/SearchBox/SearchBox.jsx'
import './App.css';



class App extends Component {
constructor() {
  super();

  this.state = {
    friends: [],
    searchfield: ''
  }

  // this.handleChange = this.handleChange.bind(this);
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ friends: users}))
}
handleChange = e => {
  this.setState(
      ({ searchfield: e.target.value })
    )
}


  render() {
    const { friends, searchfield } = this.state;
    const filteredFriends = friends.filter(friend =>
      friend.name.toLowerCase().includes(searchfield.toLowerCase())
    )

    return ( 
      <div className="App">
        <h1>
          Friends Dex
        </h1>
        <SearchBox 
          placeholder="Search Friends"
          handleChange={this.handleChange}
        />
        <CardList friends={filteredFriends} />
      </div>
    )
  }
}



export default App;
