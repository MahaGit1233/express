const express = require("express");

const app = express();

app.use((req, res, next) => {
  req.user = "Guest";
  console.log('new request property set');
  next();
});

app.use('/welcome',(req,res,next)=>{
    console.log('welcome page');
    next();
})

app.get('/welcome',(req,res,next)=>{
    res.send(`<h1>Welcome ${req.user}</h1>`);
})

app.listen(3000,()=>{
    console.log('server is running');
});
