import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MOCK_DATA from '../API/MOCK_DATA';


const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 240px;
    padding: 10px;
    border-radius: 1rem;
    box-shadow: 0 0 5px 1px #5e5e5e;
    transition: transform 0.3s ease-in-out;
    &:hover{
        transform:translateY(-10px);
    }
    `;

const H1 = styled.h1`
    font-size: 20px;
    margin-bottom: 5px;
`;

const P = styled.p`
    font-size: 1rem;
    margin-bottom: 4px;
`;


const AddBtn = styled.button`
    border: none;
    border-radius: 8px;
    color: white;
    padding: 7px;
    background-color: #fa3434;
    cursor: pointer;
    width:50px;
    margin: 10px auto;
    &:hover{
        background-color: #d33030;
    }
`;

export const PokemonCard = ({addPokemon}) => {
  return (
    <>
        {MOCK_DATA.map((pokemon) => {
            const { id, img_url, korean_name, types } = pokemon;
            return (
                <Card key={id}>
                    <img src={img_url} alt = {korean_name} 이미지 />
                    <H1>{korean_name}</H1>
                    <P>No. {id}</P>
                    <Link to = {`/PokemonDetail/:${id}`}style={{ textDecoration: "none", color:"black" }}>
                    <a>상세 정보</a>
                    </Link>
                    <AddBtn onClick={() => addPokemon(pokemon)}>추가</AddBtn>
                </Card>
                
            )
        })}
    </>
  )
}
export default PokemonCard;