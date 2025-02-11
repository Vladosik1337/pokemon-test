import { AxiosResponseSuccess, apiPaths, getData } from ".";
import { GetAllPokemonsResponse } from "./types";

export const apiHandlers = {
  pokemons: {
    getAllPokemons(
      limit: number
    ): AxiosResponseSuccess<GetAllPokemonsResponse> {
      return getData<GetAllPokemonsResponse>(
        apiPaths.pokemons.getAllPokemons(),
        {
          params: {
            limit,
          },
        }
      );
    },
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    getPokemonById(pokemonName: string): AxiosResponseSuccess<any> {
      return getData<any>(apiPaths.pokemons.getPokemonById(pokemonName));
    },
  },
};
