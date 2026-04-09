// curl --data "username= Jon&password=secret" http://localhost:3000
// lesson 6.1. Serving static files with the fs module

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  // Require the fs module.
  fs = require("fs");
  // Set up route mapping for HTML files.
const routeMap = {
  "/": "views/index.html",
};

http
  .createServer((req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, {
      "Content-Type": "text/html",
    });
    if (routeMap[req.url]) {
      // Read the contents of the mapped file.
      fs.readFile(routeMap[req.url], (err, data) => {
        // Respond with file contents.
        res.write(data);
        res.end();
      });
    } else{
      res.end("<h1>Sorry, not found.</h1>");
// console.log(req.url=='/')
    }
  })
  .listen(port);
console.log(`The server has started and is listening on port number:
${port}`);
