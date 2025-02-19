const fs = require('fs');
// write in the text file 

fs.writeFileSync("rohan.txt","hey there i am learning javscript ");

let text= fs.readFileSync("rohan.txt","utf-8");
text= text.replace("learning","practicing")
console.log(text);
