/**
 * getListStudents - Returns an array of objects representing students.
 * Each object has three attributes: id (Number), firstName (String), and location (String).
 *
 * @returns {Array} Array of student objects.
 */
export default function getListStudents() {
  // Return an array of objects representing students
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
