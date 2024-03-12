/**
 * createInt8TypedArray - Creates a new ArrayBuffer with an Int8 value at a specific position.
 *
 * @param {number} length - The length of the ArrayBuffer.
 * @param {number} position - The position to insert the Int8 value.
 * @param {number} value - The Int8 value to insert.
 * @returns {ArrayBuffer} New ArrayBuffer with the updated value.
 * @throws {Error} Throws an error if the position is outside the valid range.
 */
function createInt8TypedArray(length, position, value) {
  // Check if the position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView for the ArrayBuffer
  const dataView = new DataView(buffer);

  // Set the Int8 value at the specified position
  dataView.setInt8(position, value);

  return buffer;
}
export default createInt8TypedArray;
