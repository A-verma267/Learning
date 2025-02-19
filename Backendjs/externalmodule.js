console.log("this is the tutorial for the external module ");

function average (arr){
    let sum =0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/(arr.length);
}

module.exports= average;

// module.exports={avg: average , name : "harry", age : 23};


