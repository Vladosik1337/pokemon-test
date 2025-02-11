import { Pokemon } from "@/api";
import { PokemonCard } from "../PokemonCard";

interface ProductsListProps {
  pokemons?: Pokemon[];
}

export const PokemonList = ({ pokemons }: ProductsListProps) => {
  if (!pokemons?.length) {
    return (
      <div className="flex justify-center items-center">
        <h1>No Pokemons</h1>
      </div>
    );
  }
  return (
    <>
      <>
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left gap-4">
          {pokemons?.map((product, id) => (
            <PokemonCard key={id} product={product} />
          ))}
        </div>
      </>
    </>
  );
};
