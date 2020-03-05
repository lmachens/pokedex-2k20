import './favorites.scss';
import { createElement } from '../lib/dom';

export function createFavorites() {
  const container = createElement('section', {
    className: 'favorites'
  });
  return container;
}
