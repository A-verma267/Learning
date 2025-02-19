/* node js:
    it is the javascript runtime built on chrome'v8 javascript engine;
    it is designed to build scaleable nettwork application 
    it is free and open sources server environment 
    it allows us to run js on the server and can run on multiple os 
    why ?
     it is fast language ;
     it contain so mamy useful built in modules on it ;

*/
const fs = require("fs");
const http= require("http");

let read = fs.readFileSync("text.txt","utf-8");
console.log(read);


fs.writeFileSync("text.txt","this is the another data included in it :--");

fs.readFile("text.txt","utf-8",(err,data)=>{
    console.log(data);

})

console.log("here we gonna study about the asynchronous and synchronous method os reading and writing the file :--");


// const fs = require("fs");

// console.log(" This is just a starting of the javascript");
// let text = fs.readFileSync("text.txt","Utf-8");
// console.log(text);

// text = text.replace("Lorem" , " hutt");
// console.log(text);




// fs.readFile("text.txt" ,"utf-8",(err, data)=>{
//     console.log(data);

// })
// console.log(" this is asynchronous mode of reading a text file ");

