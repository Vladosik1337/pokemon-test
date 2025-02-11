"use client";

import { useGetAllPokemons } from "@/api/queries/useGetAllPokemons";
import { Loader, SearchInput } from "@/components";
import { PokemonList } from "@/components/PokemonList";
import { POKEMONS_LIMIT } from "@/constant";
import { useDebouncedQuery } from "@/hooks";
import { useMemo } from "react";

export default function Home() {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const { query, setQuery, debouncedQuery } = useDebouncedQuery();

  const { data: pokemons, isLoading } = useGetAllPokemons(POKEMONS_LIMIT);

  const filteredPokemons = useMemo(() => {
    if (!pokemons) return [];

    return pokemons?.data?.results.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery, pokemons]);

  return (
    <div className="lg:px-[80px] px-[20px] py-[90px] max-w-[1440px] w-full min-h-[100%] bg-neutral-800">
      <div className="flex md:flex-row flex-col gap-[16px] mb-[24px]">
        <SearchInput query={query} setQuery={setQuery} />
      </div>

      {isLoading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        <PokemonList pokemons={filteredPokemons} />
      )}
    </div>
  );
}
