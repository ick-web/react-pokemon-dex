import React from 'react'
import styled from 'styled-components';
import MOCK_DATA from '../API/MOCK_DATA';


const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 240px;
    border-radius: 1rem;
    box-shadow: 0 0 5px 1px #5e5e5e;
`;

const P = styled.p`
    font-size: 16px;
    margin-bottom: 4px;
`;

const H1 = styled.h1`
    font-size: 20px;
    margin-bottom: 10px;
`;

const AddBtn = styled.button`
    border: none;
    border-radius: 8px;
    color: white;
    padding: 7px;
    background-color: #fa3434;
    cursor: pointer;
    width:50px;
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
                    {/* <P>타입: {types}</P> */}
                    <AddBtn onClick={() => addPokemon(pokemon)}>추가</AddBtn>
                </Card>
            )
        })}
    </>
  )
}
export default PokemonCard;