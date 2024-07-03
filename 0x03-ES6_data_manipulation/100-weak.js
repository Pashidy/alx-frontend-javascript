const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const count = weakMap.get(endpoint);

  if (count >= 4) { // we check for 4 because we'll increment after this check
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, count + 1);
}

export { weakMap, queryAPI };
