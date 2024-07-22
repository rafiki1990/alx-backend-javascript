const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

// Set the server to listen on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Export the app for external use
module.exports = app;
