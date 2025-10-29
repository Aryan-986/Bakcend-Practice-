const express = require("express");
const app = express ();

//Global middleware for logging request time 
app.use((req,res,next)=> {
  
})

app.listen(3000, ()=>{
  console.log("server is runnig on 3000 port")
})

//specific route middleware unlike app.use (which applies for every route) a route 
//specific middleware runs only for the route where it is attached. we attach directly inside a route defination like this
//app.get("/profile", checkUser, (req, res) => {
 // res.send("User Profile Page");
//});
