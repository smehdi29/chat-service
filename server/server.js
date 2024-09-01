const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3001;

// create the server object
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// open up port for listening, server is on loop
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// This code above successfully just responds with Hello World on Connection