// curl --data "username= Jon&password=secret" http://localhost:3000
const getJSONString = obj =>{
      return JSON.stringify(obj,null,2)
    }
const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer();
  app.on('request',(req, res) => {
    let body = []
    req.on("data", (bodyData)=>{
      body.push(bodyData)
    })
    req.on("end",()=>{
      body = Buffer.concat(body).toString();
      console.log(`Request Body Contents: ${body}`)
    })
    console.log(`URL: ${getJSONString(req.url)}`)
    console.log(`Headers: ${getJSONString(req.headers)}`)
    console.log(`Method: ${getJSONString(req.method)}`)
    res.writeHead(httpStatus.StatusCodes.OK, {
      "Content-Type": "text/html",
    })
    
    let responseMessage = "<h1>Hello, Universe!</h1>";
    res.end(responseMessage);
    console.log(`Sent a response : ${responseMessage}`);
  });

app.listen(port);
console.log(`The server has started and is listening on port number:
${port}`);
