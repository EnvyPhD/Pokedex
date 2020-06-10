import React, { Component } from 'react';
import { CardList } from './components/CardList/CardList'

import SearchBox from './components/SearchBox/SearchBox.jsx'
import './App.css';



class App extends Component {
constructor() {
  super();

  this.state = {
    pokemonArray: [],
    pokemonInfoArray: [],
    searchfield: '',
  }
}


componentDidMount() {
  this.fetchKantoDex()
  // console.log(this.state.pokemonArray)
  // console.log(this.state.pokemonInfoArray)
}
// Fetches the pokemon that reside in Kanto.
fetchKantoDex = () => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => response.json())
    .then(data => this.setState({ pokemonArray: data.results}))
    .then(this.fetchSinglePokemon)
}

// Is called by other fetch methods. Loops through and fetches the information pertaining to
// each pokeon fetched, and stores their info in a seperate array.
fetchSinglePokemon = () => {
  let tempInfo = [];
  for(let i = 0; i < this.state.pokemonArray.length;i++){
    let url = this.state.pokemonArray[i].url;
      fetch(url)
      .then(response => response.json())
      .then(pokedata => tempInfo.push(pokedata))
  } 
  this.setState({ pokemonInfoArray: tempInfo})
}

handleChange = e => {
  this.setState(
      ({ searchfield: e.target.value })
    )
}


  render() {
    const { pokemonArray, searchfield} = this.state;
    const filteredPokemon = pokemonArray.filter(pokemon =>
      pokemon.name.includes(searchfield.toLowerCase())
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
        <CardList friends={filteredPokemon} />
      </div>
    )
  }
}



export default App;
