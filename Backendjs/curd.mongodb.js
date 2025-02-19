
// These are the CRUD operation in th emongodb

use("curdDb");


//creating the collection in the mongodb


db.createCollection("Courses");

// inserting the data in the mongoddcollection 

// db.courses.insertOne({"name":"Anshika"});

// db.courses.insertMany([{"name":"rabba","number":100},{"name":"akansha","number":100},{"name":"bhuvanshi","number":0},{"name":"trishika", "number":0}])


// reading the content from the mongodb

let a = db.courses.find({"number":0});
// console.log(a);
// console.log(a.count());// this will tell the total no of value
// console.log(a.toArray());//return the array of all the element 

let b = db.courses.findOne({"number":100});
console.log(b);

// updation 

db.courses.updateOne({"number":100},{$set:{"number":1000}});
db.courses.updateMany({"number":100},{$set:{"number":1000}});

//deletion

db.courses.deleteOne({"number":1000});
db.courses.deleteMany({"number":1000});
db.courses.deleteMany({"number":0});
db.courses.deleteMany({"name":"Anshika"});


