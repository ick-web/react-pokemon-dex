import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PokeBall from "../assets/pokeball.png";
import pokemonLogo from "../assets/pokemon-logo.png";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
  padding: 10px 10px 110px;
  border-radius: 10px;

  h1{
    font-size:2rem;
    font-weight:700;
    color: #f03c32;
  }
`;
const DashBoardCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  gap: 30px;
  margin-top: 90px;
`;

const DashBorder = styled.div`
  width: 200px;
  max-height: 250px;
  min-height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed #a7a7a7;
  border-radius: 20px;
  padding: 20px;
  background-color: white;
`;

const Img = styled.img`
  width: 20%;
  padding: 20px;
  cursor: pointer;
`;

const DeleteBtn = styled.button`
  border: none;
  border-radius: 8px;
  color: white;
  padding: 7px 10px;
  background-color: #fa3434;
  cursor: pointer;
  width: 50px;
  &:hover{
    opacity:0.8;;
    }
`;

const PokeBallImg = styled.img`
  width: 70%;
`

const CardWrapper = styled.div`
  width: 130px;
  height: 200px;
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

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
              {pokemonList?.[index] ? (
                <CardWrapper>
                  <img
                    src={pokemonList[index].img_url}
                    alt={pokemonList[index].korean_name}
                  ></img>
                  <p>{pokemonList[index].korean_name}</p>
                  <p>{"타입: " + pokemonList[index].types}</p>

                  <DeleteBtn onClick={() => removePokemon(pokemonList[index])}>
                    삭제
                  </DeleteBtn>
                </CardWrapper>
              ) : (
                <PokeBallImg src={PokeBall} alt="포켓볼" />
              )}
            </DashBorder>
          ))}
      </DashBoardCards>
    </Div>
  );
};
export default Dashboard;
