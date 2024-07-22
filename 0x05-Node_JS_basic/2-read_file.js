const fs = require('fs');

const countStudents = (filePath) => {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(filePath, 'utf-8');

    // Process the file content
    const lines = data.trim().split('\n').filter(line => line.length > 0);
    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Create a map to store the fields and their respective students
    const fields = {};
    const students = lines.slice(1); // Skip the header

    students.forEach(student => {
      const [firstname, lastname, age, field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    // Log the total number of students
    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field and their names
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    // Handle errors
    console.error(error.message);
  }
};

module.exports = countStudents;
