import React from 'react'
import { Pokemon } from '../interfaces/fetchAllPokemonsResponse';

interface Props{
  pokemon: Pokemon
}

export const PokemonItem = ( { pokemon }: Props ) => {
  const {id, name, pic} = pokemon;

  return (
    <>
      <div className="card mt-4" key={id} >
        <img src={pic} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
    </>
  )
}
