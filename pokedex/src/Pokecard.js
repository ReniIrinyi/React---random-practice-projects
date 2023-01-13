import React, { Component } from "react";
import "./Pokecard.css";
const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

const padToThree = (number) =>
  number <= 999 ? `00${number}`.slice(-3) : number;

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
    return (
      <div className="pokecard">
        <h1 className="pokecard-title">{this.props.name}</h1>
        <img src={imgSrc}></img>
        <div className="pokecard-data"> Type:{this.props.type}</div>
        <div className="pokecard-data"> EXP:{this.props.base_experience}</div>
      </div>
    );
  }
}

export default Pokecard;
