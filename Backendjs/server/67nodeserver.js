const http = require("http");

const fs = require("fs");
const front = fs.readFileSync("front.html","utf-8");

const home = fs.readFileSync("home.html","utf-8");
const about = fs.readFileSync("about.html","utf-8");
const contact = fs.readFileSync("contact.html","utf-8");
const link = fs.readFileSync("link.html","utf-8");


const server = http.createServer((req,res)=>{
    console.log(req.url);
    url=req.url;

    res.statusCode=200;
    res.setHeader= {"content-type " : "text/html"};

    if(url=='/'){
        res.end(front);
    }
    else if(url=='/about'){
        res.end(about);
    }
    else if(url=="/home"){
        res.end(home);
    }
    else if(url=='/contact'){
        res.end(contact);
    }
    else if(url=="/link"){
        res.end(link);
    }
    else {
        res.statuscode = 404;
        res.end("<h1> 404 is not found </h1>");
        
    }
});
server.listen(80,'127.0.0.1',()=>{
    console.log("your content is running very well brother");

})
