/**
 * getListStudentIds - Extracts an array of ids from a list of student objects.
 *
 * @param {Array} studentsArray - An array of student objects.
 * @returns {Array} Array of student ids.
 */
export default function getListStudentIds(studentsArray) {
  // Check if the input is an array
  if (!Array.isArray(studentsArray)) {
    return [];
  }

  // Use the map function to extract ids
  const studentIds = studentsArray.map((student) => student.id);

  return studentIds;
}
