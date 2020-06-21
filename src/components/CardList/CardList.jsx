import React from "react";
import { Card } from "../Card/Card";
import "./CardList.css";

export const CardList = (props) => (
  <div className="CardList">
    {props.pokeInfo.map((pokemon) => (
      <Card key={pokemon.id} pokemon={pokemon} />
    ))}
  </div>
);
