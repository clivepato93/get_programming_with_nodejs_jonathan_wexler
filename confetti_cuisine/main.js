
const port = 3000,
http = require('http'),
httpStatus = require('http-status-codes').StatusCodes,
router = require('./router'),
contentTypes = require('./content-types'),
utils = require('./utils')

router.get('/',(req,res)=>{
    res.writeHead(httpStatus.OK,contentTypes.html)
    utils.getFile('./views/index.html',res)
})

router.get('/index.html',(req,res)=>{
    res.writeHead(httpStatus.OK,contentTypes.html)
    utils.getFile('./views/index.html',res)
})

router.get('/courses',(req,res)=>{
    res.writeHead(httpStatus.OK,contentTypes.html)
    utils.getFile('./views/courses.html',res)
})

router.get('/contact',(req,res)=>{
    res.writeHead(httpStatus.OK,contentTypes.html)
    utils.getFile('./views/contact.html',res)
})

router.get('/contact.html',(req,res)=>{
    res.writeHead(httpStatus.OK,contentTypes.html)
    utils.getFile('./views/contact.html',res)
})


router.get('/courses.html',(req,res)=>{
    res.writeHead(httpStatus.OK,contentTypes.html)
    utils.getFile('./views/courses.html',res)
})

router.get('/error.html',(req,res)=>{
    res.writeHead(httpStatus.OK,contentTypes.html)
    utils.getFile('./views/error.html',res)
})


router.get('/bootstrap.css',(req,res)=>{
    res.writeHead(httpStatus.OK,contentTypes.css)
    utils.getFile('./public/css/bootstrap.css',res)
})

router.get('/confetti_cuisine.css',(req,res)=>{
    res.writeHead(httpStatus.OK,contentTypes.css)
    utils.getFile('./public/css/confetti_cuisine.css',res)
})

router.get('/people.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK,contentTypes.html)
    utils.getFile('./public/images/people.jpg',res)
})

router.get('/graph.png',(req,res)=>{
    res.writeHead(httpStatus.OK,contentTypes.png)
    utils.getFile('./public/images/graph.png',res)
})


router.get('/product.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK,contentTypes.html)
    utils.getFile('./public/images/product.jpg',res)
})

router.post('/',(req,res)=>{
    res.writeHead(httpStatus.OK,contentTypes.html)
    utils.getFile('./views/thanks.html',res)
})

app = http.createServer(router.handle).listen(3000)
console.log("listening on port: "+ port)