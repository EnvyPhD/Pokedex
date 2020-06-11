import React from 'react';
import './Card.css'

function capitalizeFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
export const Card = props => (
    // console.log(props),
    <div className="Cards">

        <img alt="friend" src ={`https://robohash.org/${props.pokemon.id}?set=set2&size=180x180`}></img>
        <h2> 
            {capitalizeFirstLetter(props.pokemon.name)} 
        </h2>
        <p>Type: {props.pokemon.types[0].type.name} </p>

    </div>
)   