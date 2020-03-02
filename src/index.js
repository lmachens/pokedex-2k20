function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Pokedex';

  return element;
}

const div = component();
document.body.appendChild(div);
