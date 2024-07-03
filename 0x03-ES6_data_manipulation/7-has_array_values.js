function hasValuesFromArray(set, array) {
  const check = array.every(function(item) {
    return set.has(item);
  });
  return check;
}

export default hasValuesFromArray;
