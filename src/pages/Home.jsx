import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();

  return (
    <div>
        <h1>Pokemon Dex!!</h1>
        <button 
        onClick={() => {
            navigate("/Dex")
        }}>
            포켓몬 도감 시작하기
        </button>
    </div>
  )
}
export default Home;