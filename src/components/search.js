import './search.scss';
import { createElement } from '../lib/dom';

export function createSearchInput(props) {
  const element = createElement('input', {
    className: 'search',
    type: 'search',
    placeholder: 'Enter Pokemon name...',
    value: props.value
  });
  return element;
}
