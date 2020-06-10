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

  // this.handleChange = this.handleChange.bind(this);
}


componentDidMount() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(data => this.setState({ pokemonArray: data.results}))
    .then(this.fetchSinglePokemon)
}

fetchSinglePokemon = () => {
  for(let i = 0; i < this.state.pokemonArray.length;i++){
    let url = this.state.pokemonArray[i].url;
    console.log(url)
      fetch(url)
      .then(response => response.json())
      .then(pokedata => this.setState({pokemonInfoArray: pokedata}))
      // .then(pokedata => {
      //   for (let i = 0; i < this.state.pokemonArray.size; i++) {
      //     this.setState({pokemonInfoArray: pokedata})
      //     console.log("lol")
      //   }
      // })
  }
}

handleChange = e => {
  this.setState(
      ({ searchfield: e.target.value })
    )
}


  render() {
    const { pokemonArray, searchfield} = this.state;
    console.log(this.state.pokemonArray)
    console.log(this.state.pokemonInfoArray)

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
