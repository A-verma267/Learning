console.log("this is the file where we gonna use the external module ");

// const average= require('./externalmodule');
// console.log(average([3,4]));

const mod =require("./externalmodule");

console.log(mod.name);
console.log(mod.avg);

console.log(mod.avg([3,4,5]));



