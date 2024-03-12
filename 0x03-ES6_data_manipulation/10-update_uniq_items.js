/**
 * updateUniqueItems - Updates the quantity to 100 for items with an initial
 *                      quantity of 1 in the map.
 *
 * @param {Map} inputMap - The map to update.
 * @returns {Map} Updated map with quantities modified.
 * @throws {Error} Throws an error if the input is not a map.
 */
function updateUniqueItems(inputMap) {
  // Check if the input is a map
  if (!(inputMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Create a new Map to store the updated values
  const updatedMap = new Map();

  // Iterate over entries in the inputMap
  for (const [itemName, quantity] of inputMap.entries()) {
    // Check if the quantity is 1, update to 100, otherwise keep the original quantity
    const updatedQuantity = quantity === 1 ? 100 : quantity;

    // Set the updated values in the new map
    updatedMap.set(itemName, updatedQuantity);
  }

  return updatedMap;
}
export default updateUniqueItems;
