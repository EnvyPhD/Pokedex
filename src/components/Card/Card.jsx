import React from 'react';
import './Card.css'

function capitalizeFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
export const Card = props => (
    // console.log(props),
    <div className="Cards">
        <h2> 
            {capitalizeFirstLetter(props.pokemon.name)} 
        </h2>
        <img alt="friend" src={props.pokemon.sprites.front_default}></img>
        <p>Type: {props.pokemon.types[0].type.name} </p>
    </div>
)   