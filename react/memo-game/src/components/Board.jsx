import React from 'react'
import { useEffect, useState } from 'react';
import PokeCard from './PokeCard';
import '../App.css'

export default function Board() {
  const [pokemon, setPokemon] = useState([]);
  const [score, setScore] = useState(0);

  const[memo, setMemo] = useState(new Set());

  useEffect(() => {
    async function fetchData(){
      try {
        const rand = Math.floor(Math.random() * 81);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${rand}&limit=20`);
        const data = await response.json();
        const pokemonList = await Promise.all(data.results.map(async (poke, idx) => {
          const {name, url} = poke;
          const response = await fetch(url);
          const pokeDetails = await response.json();
          const imageUrl = pokeDetails.sprites.other["official-artwork"].front_default;
          return {name, imageUrl};
        }));
        setPokemon(pokemonList);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
    

  }, [score]);

  const handleClick = (poke) => {
    console.log("memo", memo);
    console.log("pressed", poke.name);
    // if it exists, reset
    if (memo.has(poke.name)) {
      setScore(0);
      memo.clear();
    } else {
      memo.add(poke.name);
      setScore(score + 1);
    }
    console.log("memo after", memo);
  }


  return (
    <>
      <p>Score: {score}</p>
      <div className='container'>
        {pokemon.map((poke, idx) => {
          return <PokeCard key={idx} poke={poke} onClick={() => handleClick(poke)}/>
        })}
      </div>
    </>
    
  )
}
