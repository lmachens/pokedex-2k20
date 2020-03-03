import './app.scss';
import { createElement } from './lib/dom';
import { createTitle } from './components/title';
import { createSearchInput } from './components/search';
import { createPokemons } from './components/pokemons';
import Logo from './assets/pokemon.png';
import { appendContent } from './lib/dom';

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
  let pokemons = createPokemons(allPokemons);

  appendContent(header, [logo, title]);
  appendContent(main, [searchInput, pokemons]);

  searchInput.addEventListener('input', event => {
    main.removeChild(pokemons);

    const searchValue = event.target.value;
    const filteredPokemons = allPokemons.filter(pokemon => {
      return pokemon.startsWith(searchValue);
    });

    pokemons = createPokemons(filteredPokemons);
    appendContent(main, pokemons);
  });

  return [header, main];
}
