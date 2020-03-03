import './index.scss';
import { app } from './app';
import { appendContent } from './lib/dom';

const elements = app();
appendContent(document.body, elements);
