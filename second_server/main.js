// curl --data "username= Jon&password=secret" http://localhost:3000
// lesson 6.1. Serving static files with the fs module


/*
1 Create a function to interpolate the URL into the file path.
2 Get the file-path string. 
3 Interpolate the request URL into your fs file search. 
4 Handle errors with a 404 response code. 
5 Respond with file contents.
*/
// Create a function to interpolate the URL into the file path.
const getViewUrl = (url) => {     
  if(url=='/'){
    return `views/index.html`; 
  }             
  return `views${url}.html`;
};

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
    // Get the file-path string. 
   let viewUrl = getViewUrl(req.url);
  //  Interpolate the request URL into your fs file search. 
   fs.readFile(viewUrl, (error,data)=>{
    // Handle errors with a 404 response code.
    if(error){
      res.writeHead(httpStatus.StatusCodes.NOT_FOUND);
      res.write("<h1>FILE NOT FOUND</h1>");
    } else{
      // Respond with file contents.
      res.writeHead(httpStatus.StatusCodes.OK,{
              "Content-type": "text/html"
            });
      res.write(data)
    }
    res.end()
   })
  })
  .listen(port);
console.log(`The server has started and is listening on port number:
${port}`);
