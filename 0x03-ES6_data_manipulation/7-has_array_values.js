/**
 * hasValuesFromArray - Checks if all elements in the array exist within the set.
 *
 * @param {Set} set - The Set to check against.
 * @param {Array} array - The array whose elements are checked in the set.
 * @returns {boolean} True if all elements in the array exist within the set, false otherwise.
 */
function hasValuesFromArray(set, array) {
  // Use the every method to check if all elements in the array exist in the set
  return array.every((element) => set.has(element));
}
export default hasValuesFromArray;
