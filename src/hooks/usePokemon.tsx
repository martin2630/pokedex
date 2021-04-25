import { useState, useEffect } from 'react'
import { fetchPokemons } from '../helpers/fetchPokemons';
import { Pokemon } from '../interfaces/fetchAllPokemonsResponse';

export const usePokemon = () => {
  const [ loading, setLoading ] = useState( false );
  const [ error, setError ] = useState( null );
  const [ pokemons, setPokemons ] = useState<Pokemon[]>( [] );

  useEffect( () => {
    setLoading( true );

    fetchPokemons()
      .then( ( pokemons ) => {
        setLoading( false );
        setPokemons( pokemons );
      } )
      .catch( (err) => {
        setLoading( false );
        setError( err );
      })
  }, [])

  return {
    loading,
    pokemons,
    error
  }

}
