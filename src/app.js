import './app.scss';
import { createElement } from './lib/dom';
import { title } from './components/title';
import { search } from './components/search';

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const titleElement = title('Pokedex 2k20');
  const searchElement = search();

  header.appendChild(titleElement);
  main.appendChild(searchElement);

  return [header, main];
}
