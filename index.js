const express = require("express");
const app = express ();

const checkUser = (req, res, next) => {
  console.log("Route specific middleware running....")
  next (); //Move to next function (the route handler)
};

//specefic routing implementation
app.get("/profile", checkUser,(req, res)=> {
  res.send("user profile page")
})

//Middleware 1
app.use((req,res,next)=> {
  console.log("Middleware 1 Executed");
  next();
});

//middleware 2
app.use((req,res,next)=> {
  console.log("Middleware 2 is executed")
  next();
});

//Middleware 3
app.use((req,res,next)=> {
  console.log("Middleware3 is executed");
  next();
})

//Route handler
app.get("/", (req,res)=> {
  res.send("Hello my name is aryan and this route")
})

app.listen(3000, ()=>{
  console.log("server is runnig on 3000 port")
})

//specific route middleware unlike app.use (which applies for every route) a route 
//specific middleware runs only for the route where it is attached. we attach directly inside a route defination like this
//app.get("/profile", checkUser, (req, res) => {
 // res.send("User Profile Page");
//});
