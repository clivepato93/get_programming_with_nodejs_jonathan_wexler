const port = 3000,
  express = require("express"),
  app = express();

app.get("/items/:vegetable", (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
});

app.use((req, res, next) => {                    
  console.log(`request made to: ${req.url}`);    
  next();                                        
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
