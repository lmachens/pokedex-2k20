import './pokemons.scss';
import { createElement, appendContent } from '../lib/dom';

export function createSearchResults(items) {
  const container = createElement('div', {
    className: 'pokemons'
  });

  items.forEach(item => {
    const element = createElement('div', {
      innerText: item,
      className: 'pokemon'
    });
    appendContent(container, element);
  });
  return container;
}
