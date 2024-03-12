/**
 * getStudentIdsSum - Calculates the sum of all student ids.
 *
 * @param {Array} studentsArray - An array of student objects.
 * @returns {number} Sum of all student ids.
 */
function getStudentIdsSum(studentsArray) {
  // Use the reduce function to calculate the sum of student ids
  const sumOfIds = studentsArray.reduce((accumulator, student) => accumulator + student.id, 0);

  return sumOfIds;
}
export default getStudentIdsSum;
