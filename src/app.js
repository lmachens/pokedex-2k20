import './app.scss';
import { createElement } from './lib/dom';
import { createTitle } from './components/title';
import { createSearchInput } from './components/search';
import { createPokemons } from './components/pokemons';
import Logo from './assets/pokemon.png';

const allPokemons = ['Pikachu', 'Pichu', 'Marwinchu', 'Juliachu', 'Johannachu'];

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const title = createTitle('Pokedex 2k20');
  const searchInput = createSearchInput();
  const logo = createElement('img', {
    className: 'logo',
    src: Logo
  });

  header.appendChild(logo);
  header.appendChild(title);
  main.appendChild(searchInput);

  let pokemons = createPokemons(allPokemons);
  main.appendChild(pokemons);

  searchInput.addEventListener('input', event => {
    main.removeChild(pokemons);

    const searchValue = event.target.value;
    const filteredPokemons = allPokemons.filter(pokemon => {
      return pokemon.startsWith(searchValue);
    });

    pokemons = createPokemons(filteredPokemons);
    main.appendChild(pokemons);
  });

  return [header, main];
}
