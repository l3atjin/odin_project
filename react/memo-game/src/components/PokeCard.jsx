import React from 'react'
import '../App.css'

export default function PokeCard({ poke, onClick }) {

  return (
    <div onClick={onClick}>
      <p className='text'>{poke.name}</p>
      <img className="image" src={poke.imageUrl} alt="" />
    </div>
  )
}
