import './app.scss';
import { createElement } from './lib/dom';
import { title } from './components/title';
import { search } from './components/search';
import { pokemons } from './components/pokemons';
import Logo from './assets/pokemon.png';

const allPokemons = ['Pikachu', 'Pichu', 'Marwinchu', 'Juliachu', 'Johannachu'];

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const titleElement = title('Pokedex 2k20');
  const searchElement = search();
  const logo = createElement('img', {
    className: 'logo',
    src: Logo
  });

  header.appendChild(logo);
  header.appendChild(titleElement);
  main.appendChild(searchElement);

  let searchResults = pokemons(allPokemons);
  main.appendChild(searchResults);

  searchElement.addEventListener('input', event => {
    main.removeChild(searchResults);

    const searchValue = event.target.value;
    const filteredPokemons = allPokemons.filter(pokemon => {
      return pokemon.startsWith(searchValue);
    });

    searchResults = pokemons(filteredPokemons);
    main.appendChild(searchResults);
  });

  return [header, main];
}
