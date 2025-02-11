import { GET_ALL_POKEMONS } from "@/constant";
import { useQuery } from "@tanstack/react-query";
import { apiHandlers } from "../apiHandlers";

export const useGetAllPokemons = (limit: number) => {
  return useQuery({
    queryKey: [GET_ALL_POKEMONS, limit],
    queryFn: () => apiHandlers.pokemons.getAllPokemons(limit),
  });
};
