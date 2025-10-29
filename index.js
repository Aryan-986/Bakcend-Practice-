const express = require("express");
const app = express();

// 🔹 Middleware: Simple Authentication Check
const checkAuth = (req, res, next) => {
  if (req.query.password === "1234") {
    console.log("✅ Auth success");
    next(); // allow access to the route
  } else {
    console.log("❌ Auth failed");
    res.send("Access Denied");
  }
};

// 🔸 Protected route
app.get("/admin", checkAuth, (req, res) => {
  res.send("Welcome Admin!");
});

// 🔸 Public route
app.get("/", (req, res) => {
  res.send("Public Home Page");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

//What is actually happening here
//Middleware can decide whether a route executes or not
//if the condition fails, we can stop the chain dont call next()
//you can also send a custom message .