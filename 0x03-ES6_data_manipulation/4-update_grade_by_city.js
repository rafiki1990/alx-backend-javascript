/**
 * updateStudentGradeByCity - Updates student grades for a specific city.
 *
 * @param {Array} studentsArray - An array of student objects.
 * @param {string} city - The city to filter students by.
 * @param {Array} newGrades - An array of objects with studentId and grade properties.
 * @returns {Array} Array of student objects with updated grades.
 */
function updateStudentGradeByCity(studentsArray, city, newGrades) {
  // Use filter to get students in the specified city and map to update their grades
  const updatedStudents = studentsArray
    .filter((student) => student.location === city)
    .map((student) => {
      // Find the corresponding grade in newGrades array or set it to 'N/A' if not found
      const foundGrade = newGrades.find((grade) => grade.studentId === student.id);
      const updatedGrade = foundGrade ? foundGrade.grade : 'N/A';

      // Return a new object with the updated grade
      return { ...student, grade: updatedGrade };
    });

  return updatedStudents;
}
export default updateStudentGradeByCity;
