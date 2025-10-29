const express = require ("express");
const app = express();

//Global middleware for logging request time 
app.use((req,res,next)=>{
    console.log(`Request received at: ${new Date(). toLocaleTimeString()}`)
    next(); //contribute to the next middleware or route
});

app.get("/",(req,res)=> {
    res.send("Home Page")
})

app.get("/about", (req,res)=> {
    res.send("About page")
});

app.listen(3000,()=> {
    console.log("Server running on port 3000")
})