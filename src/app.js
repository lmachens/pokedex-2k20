import './app.scss';
import { createElement } from './lib/dom';
import { createTitle } from './components/title';
import { createSearchInput } from './components/search';
import { createSearchResults } from './components/pokemons';
import Logo from './assets/pokemon.png';
import { appendContent } from './lib/dom';
import { filterPokemons } from './lib/pokemons';
import { createFavorites } from './components/favorites';

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const title = createTitle('Pokedex 2k20');
  const searchInput = createSearchInput({
    value: sessionStorage.getItem('searchValue')
  });
  const logo = createElement('img', {
    className: 'logo',
    src: Logo
  });
  const favorites = createFavorites({
    items: ['Pikachu', 'Pichu', 'Marwinchu']
  });

  let searchResults = null;
  function setSearchResults() {
    const filteredPokemons = filterPokemons(searchInput.value);
    searchResults = createSearchResults({
      items: filteredPokemons
    });
    appendContent(main, searchResults);
  }
  setSearchResults();

  appendContent(header, [logo, title]);
  appendContent(main, [searchInput, searchResults]);

  searchInput.addEventListener('input', event => {
    main.removeChild(searchResults);
    setSearchResults();

    const searchValue = event.target.value;
    sessionStorage.setItem('searchValue', searchValue);
  });

  return [header, main, favorites];
}
