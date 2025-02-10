import React, { createContext, useContext, useEffect, useState } from "react";

const PokemonContext = createContext();

export const usePokemon = () => {
  return useContext(PokemonContext);
};

export const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const savedPokemon = localStorage.getItem("pokemon");
    if (savedPokemon) {
      setPokemonList(JSON.parse(savedPokemon));
    }
  }, []);

  //포켓몬 추가
  const addPokemon = (pokemon) => {
    if (pokemonList.length >= 6) {
      alert(" 포켓몬은 6개까지만 선택가능합니다.");
      return;
    }
    if (pokemonList.some((prevPokemon) => prevPokemon.id === pokemon.id)) {
      alert("이미 존재하는 포켓몬입니다.");
      return;
    }

    setPokemonList((prevSelected) => [...prevSelected, pokemon]);
    localStorage.setItem("pokemon", JSON.stringify([...pokemonList, pokemon]));
  };

  //포켓몬 삭제
  const removePokemon = (pokemon) => {
    const updatedList = pokemonList.filter(
      (prevPokemon) => prevPokemon.id !== pokemon.id
    );
    setPokemonList(updatedList);
    localStorage.setItem("pokemon", JSON.stringify(updatedList));
  };

  return (
    <PokemonContext.Provider value={{ pokemonList, removePokemon, addPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
