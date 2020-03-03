import './index.scss';
import { app } from './app';

const elements = app();
elements.forEach(element => {
  document.body.appendChild(element);
});

// elements.forEach(document.body.appendChild);
