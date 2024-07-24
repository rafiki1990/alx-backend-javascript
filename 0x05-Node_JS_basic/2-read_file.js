// Import the file system module
const fs = require('fs');

// Function to count students
function countStudents(path) {
  try {
    console.log('Reading file:', path);

    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8').trim().split('\n');

    // If the database is empty, throw an error
    if (data.length === 0) {
      throw new Error('Cannot load the database: File is empty');
    }

    console.log('File read successfully:', data);

    // Remove the header row
    const header = data.shift();

    console.log('Header:', header);

    // Object to store the counts of students per field
    const fieldCounts = {};
    let studentCount = 0;

    // Loop through each line of the data
    data.forEach((line) => {
      console.log('Processing line:', line);

      // Split the line into fields
      const fields = line.split(',');

      // Extract the field from the last element
      const field = fields[fields.length - 1].trim();

      // If the line has only one field which is empty, skip it
      if (fields.length === 1 && fields[0].trim() === '') {
        return;
      }

      // Increment the total student count
      studentCount += 1;

      // Increment the count for the field
      fieldCounts[field] = (fieldCounts[field] || 0) + 1;
    });

    // Display the total number of students
    console.log(`Number of students: ${studentCount}`);

    // Display the number of students per field
    Object.entries(fieldCounts).forEach(([field, count]) => {
      // Filter the data for the current field and extract the student names
      const list = data
        .filter((line) => line.trim().endsWith(field))
        .map((line) => line.split(',')[0].trim())
        .join(', ');
      // Display the count and list of students for the field
      console.log(`Number of students in ${field}: ${count}. List: ${list}`);
    });

  } catch (error) {
    // Display the specific error message
    console.error('Error:', error.message);
  }
}

// Call the countStudents function with the database file path
countStudents('database.csv');

// Export the countStudents function
module.exports = countStudents;
