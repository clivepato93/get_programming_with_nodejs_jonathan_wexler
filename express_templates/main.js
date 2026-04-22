const express = require('express'),
homeController = require('./controllers/homeController'),
layouts = require('express-ejs-layouts');
app = express()

app.set('port',process.env.port||3000);
app.set('view engine','ejs');
app.use(layouts)
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("hello")
})

app.get('/name',homeController.respondWithName)
app.get("/items/:vegetable", homeController.sendReqParam);

app.listen(app.get("port"),()=>{
    console.log(`Server running on port: ${app.get('port')}`)
});