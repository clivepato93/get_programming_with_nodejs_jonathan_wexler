// curl --data "username= Jon&password=secret" http://localhost:3000
// lesson 5.3. Adding routes to a web application

// Define mapping of routes with responses.
const routeResponseMap = {                              
  "/info": "<h1>Info Page</h1>",
  "/contact": "<h1>Contact Us</h1>",
  "/about": "<h1>Learn More About Us.</h1>",
  "/hello": "<h1>Say hello by emailing us <a href='mailto:email@example.com'>here</a></h1>",
  "/error": "<h1>Sorry the page you are looking for is not here.</h1>"
};

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer((req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, {
      "Content-Type": "text/html",
    })
    // Check whether a request route is defined in the map.
    if(req.url =="/error"){
  res.end(`${httpStatus.StatusCodes.NOT_FOUND} ${routeResponseMap[req.url]}`)
      console.log(req.url)
    }
   else if(routeResponseMap[req.url]){
   res.end(routeResponseMap[req.url])
      console.log(req.url)
    } else{
      // Respond with default HTML.
      res.end("<h1>Welcome!</h1>");
    }  
  });

app.listen(port);
console.log(`The server has started and is listening on port number:
${port}`);
