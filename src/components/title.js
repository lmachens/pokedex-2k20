import './title.scss';
import { createElement } from '../lib/dom';

export function createTitle(text) {
  const element = createElement('h1', {
    innerText: text,
    className: 'title'
  });
  return element;
}
