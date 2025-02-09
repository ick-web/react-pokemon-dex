import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const Div = styled.div`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 30px;
  border-radius: 10px;
  justify-content: center;
  background-color: #efefef;
`;

export const PokemonList = () => {
  return (
    <Div>
      <PokemonCard />
    </Div>
  );
};

export default PokemonList;
