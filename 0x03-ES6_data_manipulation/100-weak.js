// Create a WeakMap instance to track the number of queries for each endpoint
export const weakMap = new WeakMap();

/**
 * queryAPI - Queries the API and tracks the number of times it's called for each endpoint.
 * Throws an error if the number of queries is >= 5 for the given endpoint.
 *
 * @param {Object} endpoint - The API endpoint to query, with properties protocol and name.
 * @throws {Error} Throws an error if the number of queries is >= 5 for the given endpoint.
 */
export const queryAPI = (endpoint) => {
  // Check if the endpoint is already in the map
  if (weakMap.has(endpoint)) {
    // Retrieve the current query count for the endpoint
    const currentCount = weakMap.get(endpoint);

    // Check if the count is >= 4 (considering the current call)
    if (currentCount >= 4) {
      throw new Error('Endpoint load is high');
    }

    // Update the query count for the existing endpoint
    weakMap.set(endpoint, currentCount + 1);
  } else {
    // If the endpoint is not in the map, set the count to 1 for the first call
    weakMap.set(endpoint, 1);
  }
};
