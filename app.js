const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World Mohana for git test!\n');
  res.end('Checking if local changes are pushed to git!\n');
  res.end('Hello, World Mohana for git branch_1!\n');
  res.end('doing some changes in mydev branch!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
