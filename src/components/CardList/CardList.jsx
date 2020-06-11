import React from 'react';
import { Card } from '../Card/Card'
import './CardList.css'



export const CardList = props => (
    console.log(props),
    <div className='CardList'>
        {props.names.map(pokemon => (
            <Card key={pokemon.id} pokemon={pokemon}  />
        ))}
    </div>
)