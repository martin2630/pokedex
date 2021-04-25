import { apiPokemon } from '../api/apiPokemon';
import { Pokemon, fetchAllPokemonResponse, SmallPokemon } from '../interfaces/fetchAllPokemonsResponse';

export const fetchPokemons = async(): Promise<Pokemon[]> => {
  const resp = await apiPokemon.get<fetchAllPokemonResponse>("pokemon?limit=1500");
  const pokemons = resp.data.results;
  return getPokemonFormatted( pokemons );
}

const getPokemonFormatted = ( pokemonList: SmallPokemon[] ): Pokemon[] => {
  const pokemons = pokemonList.map( ( poke ) => {
    const pokemonArr = poke.url.split("/");
    const id = pokemonArr[6];
    const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`;
    return {
      id,
      pic,
      name: poke.name
    }
  })
  return pokemons;
}



