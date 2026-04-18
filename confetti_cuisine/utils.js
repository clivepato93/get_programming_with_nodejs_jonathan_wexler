const fs = require("fs"),
  httpStatus = require("http-status-codes").StatusCodes,
  contentTypes = require("./content-types");

module.exports = {
  getFile(path, res) {
    fs.readFile(path, (err, data) => {
      if (err) {
        res.writeHead(httpStatus.NOT_FOUND, {contentTypes}.text);
        res.end("file not found path:" + path)

      }
      else{
        res.end(data)
      }
    });
  },
};
