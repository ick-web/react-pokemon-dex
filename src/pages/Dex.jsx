import React from "react";
import { useState } from "react";
import MOCK_DATA from "../API/MOCK_DATA";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

export const Dex = () => {
  const [pokemonList, setPokemonLIst] = useState([]);

  //포켓몬 추가
  const addPokemon = (pokemon) => {
    if (pokemonList.length >= 6) {
      alert(" 포켓몬은 6개까지만 선택가능합니다.");
    } else if (
      pokemonList.some((prevPokemon) => prevPokemon.id === pokemon.id)
    ) {
      alert("이미 존재하는 포켓몬입니다.");
    } else {
      setPokemonLIst((prevSelected) => [...prevSelected, pokemon]);
    }
  };

  //포켓몬 삭제
  const removePokemon = (pokemon) => {
    setPokemonLIst((prevSelected) =>
      prevSelected.filter((prevPokemon) => prevPokemon.id !== pokemon.id)
    );
  };

  return (
    <div>
      <Dashboard pokemonList={pokemonList} removePokemon={removePokemon} />

      <PokemonList PokemonList={MOCK_DATA} addPokemon={addPokemon} />
    </div>
  );
};
export default Dex;
