import React from 'react'
import { useEffect, useState } from 'react';

export default function Board() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchData(){
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        console.log(data.results);
        setPokemon(data);
      } catch (error) {
        console.err(error);
      }
    }
    fetchData();
    

  }, []);


  return (
    <div>board</div>
  )
}
