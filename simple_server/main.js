const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer((request, response) => {
    console.log("Received an incoming request!");
    response.writeHead(httpStatus.StatusCodes.OK, {
      "Content-Type": "text/html",
    });

    let responseMessage = `<head><title>Your Page Title Here</title></head><body><h1>Hello, Ttest!</h1></body>`;
    response.write(responseMessage);
    response.end();
    console.log(`Sent a response : ${responseMessage}`);
  });

app.listen(port);
console.log(`The server has started and is listening on port number:
${port}`);
