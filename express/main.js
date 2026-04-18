const port = 3000,
express = require('express')
app = express()

app.get('/',(req,res)=>{
    console.log(req.url);
    res.send("testing")

}).listen(port,()=>console.log("listening on port: "+ port))