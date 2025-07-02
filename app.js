const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("middleware 1 created");
  next();
});

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/welcome/:username",(req,res)=>{
  const name=req.params.username;
  const role=req.query.role;
  res.send(`<h1>Welcome ${name}, your role is ${role}.</h1>`);
})

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
