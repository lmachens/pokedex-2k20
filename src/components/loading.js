import './loading.scss';
import { createElement } from '../lib/dom';

export function createLoading() {
  return createElement('div', {
    innerText: 'Loading...',
    className: 'loading'
  });
}
