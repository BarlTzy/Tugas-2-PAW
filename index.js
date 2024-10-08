const express = require ("express");
const app = express;
const port = 300;

app.get("/", (req, res)=>{
    res.send("Hello")
})

app.get("/Home", (req, res)=>{
    res.send("Home")
})

app.get("/About", (req, res)=>{
    res.send("About US")
})

app.get("/Contact", (req, res)=>{
    res.send("Contact")
})


app.listen(port, ()=>{
    console.log(`example app listening at http://localhost:${port}`)
})