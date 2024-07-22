const express = require('express');
const fs = require('fs');
const app = express();
const port = 1245;

// Function to read the CSV file and process student data
const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n').filter(line => line.length > 0);
        const students = lines.slice(1);
        const fields = {};

        students.forEach(student => {
          const studentData = student.split(',');
          const field = studentData[3];
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(studentData[0]);
        });

        let response = `Number of students: ${students.length}\n`;
        for (const field in fields) {
          response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        }

        resolve(response.trim());
      }
    });
  });
};

// Route for the root path
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

// Route for the students path
app.get('/students', async (req, res) => {
  const database = process.argv[2]; // Database file path from command line argument
  res.set('Content-Type', 'text/plain');

  try {
    const studentList = await countStudents(database);
    res.send(`This is the list of our students\n${studentList}`);
  } catch (error) {
    res.send(`This is the list of our students\n${error.message}`);
  }
});

// Start the HTTP server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Export the app for external use
module.exports = app;
