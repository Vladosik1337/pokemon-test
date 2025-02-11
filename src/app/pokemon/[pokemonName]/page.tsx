"use client";

import { usetGetPokemonById } from "@/api/queries";
import { Loader, PokemonImage } from "@/components";
import { PokemonCharacteristic } from "@/components/PokemonCharacteristic";
import { useParams } from "next/navigation";

const ProductPage = () => {
  const { pokemonName } = useParams();

  const { data: pokemon, isLoading } = usetGetPokemonById(
    pokemonName as string
  );

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
        {pokemon?.stats?.map((statObject: any) => {
          const statName = statObject.stat.name;
          const statValue = statObject.base_stat;

          return (
            <PokemonCharacteristic statName={statName} statValue={statValue} />
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
