// the is one of the modules in the node.js which is use to read and write the file with the help of javascript 

const fs = require("fs");
// here the function will gonna work in asynchronous behaviour i.e. the function will wait the its execution but it will not stop the rest of output that is the compiler will say you move when a function complete i will print it out .

console.log("we are starting from here");
fs.writeFile("anshika.txt","she is an amazing girl",()=>{
    console.log("The work is done");
    fs.readFile("anshika.txt",(error,data)=>{
        console.log(data.toString()); // here we use toString() because we want our output in the readable format as if it is not present then it gonna give us the binary code 
    })
})
fs.appendFile("anshika.txt","harsh is nice name ",(e,d)=>{
    console.log("done");
})
console.log("ending");