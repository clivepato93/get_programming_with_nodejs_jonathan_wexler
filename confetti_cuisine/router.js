/*
Last, in a new file, I add the code in listing 7.6. This router.js file requires the http-status-codes
and my two custom modules: contentTypes and utils.
The router module includes a routes object that holds key-value pairs mapped to GET requests
through my get function and POST requests through my post function. The handle function is 
the one referred to as the callback function to createServer in main.js. 
The get and post functions take a URL and callback function and then map them 
to each other in the routes object. If no route is found, I use my custom getFile 
function in the utils module to respond with an error page.


*/

const httpStatus = require('http-status-codes'),
contentTypes = require('./contentTypes'),
utils = require('./utils')

// Create a routes object to hold route functions.
const routes = {
    GET:{},
    POST:{}
}

// Create the handle function to handle requests.
exports= {handle:(req,res)=>{
    try {
        routes[req.method][req.url](req,res)
    } catch (error) {
        res.writeHead(httpStatus.StatusCodes.OK, contentTypes.html);
    utils.getFile("views/error.html", res);

    }
}}

// Create the get and post functions to map route functions.
exports.get = (url, action) => {
  routes["GET"][url] = action;
};

exports.post = (url, action) => {
  routes["POST"][url] = action;
};
