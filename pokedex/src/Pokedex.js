import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    return (
      <div className="pokedex">
        <h1>Pokedex</h1>
        <p>Total Exp: {this.props.exp}</p>
        <p className={this.props.isWinner ? "pokedex-winner" : "pokedex-loser"}>
          {this.props.isWinner ? "Winner" : "Loser"}
        </p>
        <div className="pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              base_experience={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
