const express = require("express");
let app = express();

let port= 3000;
app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.send("this is the homepage of the express js ")
})
app.get("/blog/:slug",(req,res)=>{
    console.log(req.params);
    console.log(req.query);

    res.send(`hello ${req.params.slug}`);
})
app.listen(port,()=>{
    // the output of below code is seen in the terminal
    console.log(`The code is running on the ${port}`);
})