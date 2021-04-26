import React, { useState, ChangeEvent, useContext } from 'react'
import { usePokemon } from '../hooks/usePokemon';
import { Loading } from '../components/Loading';
import { PokemonList } from '../components/PokemonList';
import { Pokemon } from '../interfaces/fetchAllPokemonsResponse';
import { pokemonContext } from '../App';


export const HomePage = () => {
   const pagination = 5;
   const { pokemons, loading, error }= usePokemon();
  const { search, currentPage, setCurrentPage, setSearch } = useContext( pokemonContext );

  const filteredPokemons = (): Pokemon[] => {
    if ( search.length === 0 ){
      return pokemons.slice( currentPage, currentPage + pagination );
    }
    const filteredPokemon = pokemons.filter( poke => poke.name.includes( search ) )
    return filteredPokemon.slice( currentPage, currentPage + pagination );
  }

  const handleSearch = ({ target } : ChangeEvent<HTMLInputElement>) => {
    setCurrentPage( 0 );
    setSearch( target.value );
  }

  const before = () => {
    if( currentPage > 0 ){
      setCurrentPage( currentPage - pagination );
    }
  }

  const next = () => {
    if( pokemons.filter( poke => poke.name.includes( search ) ).length > currentPage + pagination ){
      setCurrentPage( currentPage + pagination );
    }
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <h1>Listado de pokemones</h1>
        </div>
        <div className="col-4 ml-auto">
          <input 
            placeholder="Escribe un pokemon"
            className="form-control mb-2 "
            type="text"
            name="search"
            value={search}
            onChange={ handleSearch }
          />
        </div>
      </div>
      <div className="row py-5">
        <div className="col-12">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li className="page-item">
                <a onClick={ before } className="page-link" href="#" aria-disabled="true">Anterior</a>
              </li>
              <li className="page-item">
                <a onClick={ next } className="page-link" href="#">Siguiente</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-12 text-center">
          {
            loading && (
              <Loading />
            )
          }
        </div>
      </div>
      <PokemonList pokemons={ filteredPokemons() } />
  </div>

  )
}
