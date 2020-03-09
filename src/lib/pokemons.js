function waitFor(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

async function getPokemons() {
  await waitFor(2000);
  // throw new Error('Something bad happend 🤬');
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=806');
  const results = await response.json();
  const pokemons = results.results;
  const pokemonNames = pokemons.map(pokemon => {
    return pokemon.name;
  });
  return pokemonNames;
}

export async function filterPokemons(searchValue) {
  const lowerCaseSearchValue = searchValue.toLowerCase();
  const allPokemons = await getPokemons();
  const filteredPokemons = allPokemons.filter(pokemon => {
    return pokemon.toLowerCase().startsWith(lowerCaseSearchValue);
  });
  return filteredPokemons;
}
