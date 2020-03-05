import './favorites.scss';
import { createElement, appendContent } from '../lib/dom';

export function createFavorites(props) {
  const container = createElement('section', {
    className: 'favorites'
  });

  props.items.forEach(item => {
    const favorite = createElement('div', {
      className: 'favorite',
      innerText: item
    });
    appendContent(container, favorite);
  });
  return container;
}
