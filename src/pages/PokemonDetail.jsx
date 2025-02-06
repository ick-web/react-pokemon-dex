import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../API/MOCK_DATA";

export const PokemonDetail = () => {
  // query string 값 가져오기
  const [searchParam] = useSearchParams();
  const queryId = searchParam.get("id");
  const details = MOCK_DATA.find((detail) => detail.id === +queryId);
  const navigate = useNavigate();
  return (
    <DetailWrapper>
      <DetailContainer>
        <img src={details.img_url} alt={details.korean_name} />
        <h1>{details.korean_name}</h1>
        <p> {"타입: " + details.types}</p>
        <p>{details.description}</p>
        <button onClick={() => navigate("/Dex")}>뒤로 가기</button>
      </DetailContainer>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  /* background-color: #ffe4b8; */
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 100px auto;
  padding: 20px;
  gap: 10px;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #ff0000;
  }

  img {
    width: 60%;
  }

  button {
    background-color: #ededed;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
      outline: 1px solid red;
    }
  }
`;

export default PokemonDetail;
