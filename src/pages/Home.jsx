import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import pokemonLogo from "../assets/pokemon-logo.png";

const StHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffe4b8;
`;

const StHomeLogo = styled.img`
  width: 50%;
`;

const StHomeBtn = styled.button`
  border: none;
  border-radius: 8px;
  color: white;
  padding: 15px;
  background-color: #fa3434;
  cursor: pointer;
  &:hover {
    background-color: #d33030;
  }
`;

export const Home = () => {
  const navigate = useNavigate();

  return (
    <StHomeContainer>
      <StHomeLogo src={pokemonLogo} />
      <StHomeBtn
        onClick={() => {
          navigate("/Dex");
        }}
      >
        포켓몬 도감 시작하기
      </StHomeBtn>
    </StHomeContainer>
  );
};
export default Home;
