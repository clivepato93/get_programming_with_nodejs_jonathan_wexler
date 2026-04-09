// curl --data "username= Jon&password=secret" http://localhost:3000
// lesson 6.1. Serving static files with the fs module



const http = require("http"),
  httpStatus = require("http-status-codes"),
  fs = require("fs");

// 1 Create an error-handling function.
const sendErrorResponse = (res) => {
  res.writeHead(httpStatus.StatusCodes.NOT_FOUND, {
    "Content-Type": "text/html",
  });
  res.write("<h1>FILE NOT FOUND</h1>");
  res.end();
};



http
  .createServer((req, res) => {
    // 2 Store the request’s URL in a variable url.
    let url = req.url;
    console.log(url)
    /// 3 Check the URL to see whether it contains a file extension.
    if (url.indexOf(".html") !== -1) {
      res.writeHead(httpStatus.StatusCodes.OK, {
        "Content-Type": "text/html",
      });
      // Customize the response’s content type.
      // Call readFile to read file contents.
      customReadFile(`./views${url}`, res);
    } 
    else if (url.indexOf(".js") !== -1) {
      res.writeHead(httpStatus.StatusCodes.OK, {
        "Content-Type": "text/javascript",
      });
      customReadFile(`./public/js${url}`, res);

    }
     else if (url.indexOf(".css") !== -1) {
      res.writeHead(httpStatus.StatusCodes.OK, {
        "Content-Type": "text/css",
      });
      customReadFile(`./public/css${url}`, res);

    } 
    else if (url.indexOf(".png") !== -1) {
      res.writeHead(httpStatus.StatusCodes.OK, {
        "Content-Type": "image/png",
      });
      customReadFile(`./public/images${url}`, res);

    } 
    else {
      sendErrorResponse(res);

    }
  })
  .listen(3000);
console.log(`The server has started and is listening on port number:
${3000}`);

// Look for a file by the name requested.
const customReadFile=(file_path,res)=>{
  // // 7 Check whether the file exists.
  if(fs.existsSync(file_path)){

    fs.readFile(file_path,(err,data)=>{
      if(err){
        console.log(err)
        onsole.log("doesnt exists")
        sendErrorResponse(res)
        return
      }
      console.log("exists")
      res.write(data);
      res.end()
      return
    });
  } else{
    sendErrorResponse(res)
    return
  }
}
