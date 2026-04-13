const fs = require('fs'),
httpStatus = require('http-status-codes'),
contentTypes = require('./contentTypes')
// Import modules for use in getFile.


// Export a function to read files and return a response.
module.exports = {
    getFile: (file, res)=>{
        fs.readFile(`./${file}`,(err,data)=>{
            if(err){
                res.writeHead(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR,contentTypes.html)
                res.end("There was an error serving content!");
            }
            else{
                res.end(data)
            }
        })
    }
}