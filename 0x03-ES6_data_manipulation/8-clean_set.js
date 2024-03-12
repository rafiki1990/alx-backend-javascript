/**
 * cleanSet - Returns a string of set values that start with a specific string.
 *
 * @param {Set} set - The Set to filter and concatenate values.
 * @param {string} startString - The starting string to filter set values.
 * @returns {string} Concatenated string of set values starting with the specified string.
 */
function cleanSet(set, startString) {
  // Use the Array.from method to convert the Set to an array
  // Filter values starting with the specified string
  // Map to extract the rest of the string after the startString
  // Join the resulting array with -
  return Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.substring(startString.length))
    .join('-');
}
export default cleanSet;
