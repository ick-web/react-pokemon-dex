import React from 'react'
import styled from 'styled-components';
import PokemonCard from './pokemonCard';

const Div = styled.div`
    margin-top:32px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`

export const PokemonList = ({ PokemonList, setPokemonList, addPokemon}) => {
  return (
    <Div>
        <PokemonCard
        PokemonList={PokemonList}
        setPokemonList={setPokemonList}
        addPokemon={addPokemon}
        />
    </Div>
  )
}

export default PokemonList;