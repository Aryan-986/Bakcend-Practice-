const express = require("express");
const app = express();

//Middelware functions
const myMiddleware = (req, res, next)=> {
    console.log("Middleware executed")
    next(); //move to next step (next middleware or route)
};

//use middleware
app.use(myMiddleware);

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
})

//simple route
app.get("/", (req, res)=> {
    res.send("Home Page");
});

app.get("/about", (req,res) => {
    res.send("About Page"); 
});


app.listen(8000, () => console.log("server is running"))