path = require('path');
fs = require('fs');

const { createServer } = require('node:http');

console.log(path.join(__dirname, 'index.js'));

// fs.mkdir(path.join(__dirname, 'test'), {}, function(err) {
//   if (err) throw err
//   console.log("folder created");
// })

fs.writeFile(path.join(__dirname, "/test", 'test.txt'), "Hello World!", function(err) {
  if (err) throw err
  console.log("file created");
})

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  // if (req.url === '/') {
  //   fs.readFile(path.join(__dirname, "index.html"), (err, content) => {
  //     if (err) throw err;
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.end(content);
  //   })
  // }
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  console.log(filePath);

  let extname = path.extname(filePath);

  let contentType = 'text/html';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, "404.html"), (err, content) => {
        if (err) throw err;
        res.end(content);
      })
    }
    res.writeHead(200, contentType);
    res.end(content);
  })
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
