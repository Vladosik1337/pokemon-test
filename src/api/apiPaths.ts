export const apiPaths = {
  pokemons: {
    getAllPokemons: () => "/pokemon",
    getPokemonById: (pokemonName: string) => `/pokemon/${pokemonName}`,
  },
};
