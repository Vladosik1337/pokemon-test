import { GET_POKEMON_BY_ID } from "@/constant";
import { useQuery } from "@tanstack/react-query";
import { apiHandlers } from "..";

export const useGetPokemonById = (pokemonName?: string) => {
  return useQuery({
    queryKey: [GET_POKEMON_BY_ID, pokemonName],
    queryFn: () =>
      apiHandlers.pokemons
        .getPokemonById(pokemonName!)
        .then((data) => data.data),
    enabled: !!pokemonName,
  });
};
