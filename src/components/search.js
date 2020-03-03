import './search.scss';
import { createElement } from '../lib/dom';

export function createSearchInput() {
  const element = createElement('input', {
    className: 'search',
    type: 'search',
    placeholder: 'Enter Pokemon name...'
  });
  return element;
}
