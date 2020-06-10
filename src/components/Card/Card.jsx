import React from 'react';


import './Card.css'
export const Card = props => (
    <div className="Cards">
            {/* {console.log(props)
            } */}
        <img alt="friend" src ={`https://robohash.org/${props.pokemon.id}?set=set2&size=180x180`}></img>
        <h2> {props.pokemon.name} </h2>
        <p> {props.pokemon.types}</p>
    </div>
)