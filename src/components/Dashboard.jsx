import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PokeBall from "../assets/pokeball.png";
import pokemonLogo from "../assets/pokemon-logo.png";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eaeaea;
  padding: 10px 0px 110px;
  border-radius: 7px;
`;
const DashBoardCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  gap: 50px;
  margin-top: 90px;
`;

const DashBorder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed #a7a7a7;
  border-radius: 20px;
  padding: 30px;
  background-color: white;
`;

const Img = styled.img`
  width: 100px;
`;

const DeleteBtn = styled.button`
  border: none;
  border-radius: 8px;
  color: white;
  padding: 7px;
  background-color: #fa3434;
  cursor: pointer;
  width: 50px;
`;

export const Dashboard = ({ pokemonList, removePokemon }) => {
  const navigate = useNavigate();
  return (
    <Div>
      <Img
        src={pokemonLogo}
        alt="pokemonLogo"
        onClick={() => {
          navigate("/");
        }}
      />
      <h1>나만의 포켓몬</h1>
      <DashBoardCards>
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <DashBorder key={index}>
              {pokemonList[index] ? (
                <>
                  <img
                    src={pokemonList[index].img_url}
                    alt={pokemonList[index].korean_name}
                  ></img>
                  <p>{pokemonList[index].korean_name}</p>
                  <p>{"타입: " + pokemonList[index].types}</p>

                  <DeleteBtn onClick={() => removePokemon(pokemonList[index])}>
                    삭제
                  </DeleteBtn>
                </>
              ) : (
                <Img src={PokeBall} alt="포켓볼" />
              )}
            </DashBorder>
          ))}
      </DashBoardCards>
    </Div>
  );
};
export default Dashboard;
