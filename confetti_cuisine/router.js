const contentTypes = require('./content-types'),
httpStatus = require('http-status-codes').StatusCodes
const routes={
    GET:{
    },POST:{}
}

module.exports= {
handle:(req,res)=>{
    try{
        if(routes[req.method][req.url]){
           routes[req.method][req.url](req,res) 
        }
    }catch(err){
        console.log("error: "+ err)
    }
},
get:(url,action)=>{
    routes["GET"][url]= action
},
post:(url,action)=>{
    routes["POST"][url]= action
},
}