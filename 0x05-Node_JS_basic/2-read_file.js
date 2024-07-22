const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(filePath, 'utf8');

    // Split the data into rows and filter out empty lines
    const rows = data.trim().split('\n').filter(row => row.trim() !== '');

    // Check if there are any rows to process
    if (rows.length === 0) {
      console.log('Number of students: 0');
      return;
    }

    // Extract headers and data
    const headers = rows[0].split(',');
    const students = rows.slice(1);

    // Initialize data structures to count students and collect names
    const fieldCounts = {};
    const fieldNames = {};

    headers.forEach(header => {
      fieldCounts[header] = 0;
      fieldNames[header] = [];
    });

    // Process each student record
    students.forEach(student => {
      const fields = student.split(',');
      fields.forEach((field, index) => {
        const header = headers[index];
        if (field.trim() !== '') {
          fieldCounts[header]++;
          fieldNames[header].push(field.trim());
        }
      });
    });

    // Log the number of students and lists
    console.log(`Number of students: ${students.length}`);

    for (const [field, count] of Object.entries(fieldCounts)) {
      console.log(`Number of students in ${field}: ${count}. List: ${fieldNames[field].join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

// Example usage:
// countStudents(path.join(__dirname, 'database.csv'));
