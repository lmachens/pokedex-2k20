import './pokemons.scss';
import { createElement, appendContent } from '../lib/dom';

export function createSearchResults(props) {
  const container = createElement('div', {
    className: 'pokemons'
  });

  props.items.forEach(item => {
    const element = createElement('div', {
      innerText: item,
      className: 'pokemon'
    });
    element.addEventListener('click', () => {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      // let favorites = JSON.parse(localStorage.getItem('favorites'));
      // if (!favorites) {
      //   favorites = [];
      // }

      if (!favorites.includes(item)) {
        favorites.push(item);
      } else {
        const itemIndex = favorites.indexOf(item);
        favorites.splice(itemIndex, 1);
      }

      const favoritesJSON = JSON.stringify(favorites);
      localStorage.setItem('favorites', favoritesJSON);
    });
    appendContent(container, element);
  });
  return container;
}
