const fs = require('fs');
const path = require('path');

const countStudents = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').filter(line => line.length > 0);
      const students = lines.slice(1); // Skip the header line
      const fields = {};

      students.forEach(student => {
        const studentData = student.split(',');
        const field = studentData[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(studentData[0]);
      });

      let totalStudents = students.length;
      console.log(`Number of students: ${totalStudents}`);

      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }

      resolve();
    });
  });
};

// Export the function for external use
module.exports = countStudents;
