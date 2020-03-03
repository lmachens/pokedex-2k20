export function createElement(tagName, attributes = {}) {
  const element = document.createElement(tagName);
  Object.keys(attributes).forEach(attributeKey => {
    element[attributeKey] = attributes[attributeKey];
  });
  return element;
}
