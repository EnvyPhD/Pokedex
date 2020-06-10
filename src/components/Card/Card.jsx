import React from 'react';


import './Card.css'
export const Card = props => (
    <div className="Cards">
        <img alt="friend" src ={`https://robohash.org/${props.person.id}?set=set2&size=180x180`}></img>
        <h2> {props.person.name} </h2>
        <p> {props.person.email}</p>
    </div>
)