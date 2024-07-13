import React, { useEffect, useState } from "react";
import axios from "axios";
import "./geeks.scss";

const API = "https://pokeapi.co/api/v2/pokemon/";

function Geeks() {
  const [pokemon, setPokemon] = useState([]);

  async function getPokemon() {
    try {
      const res = await axios.get(API);
      setPokemon(res.data.results);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="geeks_container">
      <div className="title">
        <h1>Geeks.pro</h1>
      </div>
      <div className="geeks container">
        {pokemon.map((poke, index) => (
          <div key={index} className="pokemon">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
              alt={poke.name}
            />
            <h1>{poke.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Geeks;
