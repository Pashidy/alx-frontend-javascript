function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return Array.from(set)
    .filter(function filterItems(parametro) {
      return parametro !== undefined ? parametro.startsWith(startString) : '';
    })
    .map(function mapItems(parametro) {
      return parametro !== undefined ? parametro.slice(startString.length) : '';
    })
    .join('-');
}

export default cleanSet;
