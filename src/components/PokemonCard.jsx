import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../API/MOCK_DATA";
import { usePokemon } from "../context/PokemonContext";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 240px;
  padding: 30px 10px;
  border-radius: 1rem;
  box-shadow: 0 0 5px 0.1px #ababab;
  transition: transform 0.3s ease-in-out;
  background-color: white;
  &:hover {
    transform: translateY(-10px);
  }

  p {
    color: #787878;
  }

  span {
    font-size: 0.9rem;
  }

  span:hover {
    color: #3367b0;
  }
`;

const H1 = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const AddBtn = styled.button`
  border: none;
  border-radius: 8px;
  color: white;
  padding: 7px 10px;
  background-color: #fa3434;
  cursor: pointer;
  width: 50px;
  margin: 10px auto;
  &:hover {
    opacity:0.8;
  }
`;

export const PokemonCard = () => {
  const { addPokemon } = usePokemon();
  return (
    <>
      {MOCK_DATA.map((pokemon) => {
        const { id, img_url, korean_name } = pokemon;
        return (
          <Card key={id}>
            <img src={img_url} alt={korean_name} />
            <H1>{korean_name}</H1>
            <p>No. {id}</p>
            <Link
              to={`/PokemonDetail?id=${id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>상세 정보</span>
            </Link>
            <AddBtn onClick={() => addPokemon(pokemon)}>추가</AddBtn>
          </Card>
        );
      })}
    </>
  );
};
export default PokemonCard;
