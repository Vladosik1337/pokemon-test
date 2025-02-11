"use client";

import { useGetPokemonById } from "@/api/queries";
import { Loader, PokemonImage } from "@/components";
import { PokemonCharacteristic } from "@/components/PokemonCharacteristic";
import { useParams } from "next/navigation";

const ProductPage = () => {
  //@typescript-eslint/no-explicit-any
  const { pokemonName } = useParams();

  const { data: pokemon, isLoading } = useGetPokemonById(pokemonName as string);

  if (isLoading) {
    return (
      <div className="flex w-full justify-center">
        <Loader />
      </div>
    );
  }

  if (!pokemon) {
    return <h1>No info</h1>;
  }

  return (
    <div className="py-[90px]">
      <h1 className="text-4xl text-bold pt-4">
        {String(pokemonName)?.charAt(0).toUpperCase() +
          String(pokemonName).slice(1)}
      </h1>
      <div
        className="m-4"
        style={{ position: "relative", width: "300px", height: "300px" }}
      >
        <PokemonImage
          image={pokemon?.sprites?.other["official-artwork"]?.front_default}
          name={String(pokemonName)}
        />
      </div>
      <h3>Weight: {pokemon?.weight}</h3>
      <div className="flex-col">
        {/* eslint-disable  @typescript-eslint/no-explicit-any */}
        {pokemon?.stats?.map((statObject: any, id: number) => {
          const statName = statObject.stat.name;
          const statValue = statObject.base_stat;

          return (
            <PokemonCharacteristic
              statName={statName}
              statValue={statValue}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
