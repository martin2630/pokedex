import React from 'react'
import { Pokemon } from '../interfaces/fetchAllPokemonsResponse';
import { PokemonItem } from './PokemonItem';

interface Props {
  pokemons: Pokemon[],
};

export const PokemonList = ( { pokemons }: Props ) => {
  return (
      <>
        <div className="row">
          {
            pokemons.map( ( item: Pokemon ) => (
              <div className="col-6 col-lg-3">
                <PokemonItem pokemon={item} />
              </div>
            ))
          }
        </div>
      </>
  )
}
