/**
 * groceriesList - Returns a map of groceries with the specified items.
 *
 * @returns {Map} Map containing groceries with items and quantities.
 */
function groceriesList() {
  // Create a new Map and set the items with their quantities
  const groceryMap = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);

  return groceryMap;
}
export default groceriesList;
