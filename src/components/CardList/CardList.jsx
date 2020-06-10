import React from 'react';
import { Card } from '../Card/Card'
import './CardList.css'

export const CardList = props => (
    <div className='CardList'>
        {props.friends.map(person => (
            <Card key={person.id} person={person} />

        ))}
    </div>
)