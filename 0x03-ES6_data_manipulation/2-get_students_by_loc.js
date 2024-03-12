/**
 * getStudentsByLocation - Filters students based on their location (city).
 *
 * @param {Array} studentsArray - An array of student objects.
 * @param {string} city - The city to filter students by.
 * @returns {Array} Array of student objects located in the specified city.
 */
function getStudentsByLocation(studentsArray, city) {
  // Use the filter function to get students in the specified city
  const filteredStudents = studentsArray.filter((student) => student.location === city);

  return filteredStudents;
}
export default getStudentsByLocation;
