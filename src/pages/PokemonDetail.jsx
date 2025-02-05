import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MOCK_DATA from '../API/MOCK_DATA';

export const PokemonDetail = () => {
  const { id } = useParams();
  const paramsId = id.slice(1);
  const details = MOCK_DATA.find((detail) => detail.id === +paramsId)
  const navigate = useNavigate();
  console.log(typeof details.id)
  console.log(details)
  return (
    <div>
      <img src={details.img_url} alt={details.korean_name} />
      <h1>{details.korean_name}</h1>
      <p>타입: {details.types}</p>
      <p>{details.description}</p>
      <button onClick={() => navigate("/Dex")}>뒤로 가기</button>
    </div>
  )
}
export default PokemonDetail;

