//Task 1: Execution order Test
//Goal: Understand middleware order
//Steps:
// 1. Create 3 middlewares:
//app.use((req,res,next)=>{ console.log("Middleware 1"); next(); });
//app.use((req,res,next)=>{ console.log("Middleware 2"); next(); });
//app.use((req,res,next)=>{ console.log("Middleware 3"); next(); });

const express = require("express");
const app = express();

// Middleware 1
app.use((req, res, next) => {
  console.log("Middleware 1");
  next(); // pass control to the next middleware
});

// Middleware 2
app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});

// Middleware 3
app.use((req, res, next) => {
  console.log("Middleware 3");
  next();
});

// Route handler
app.get("/", (req, res) => {
  res.send("Hello from route!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
