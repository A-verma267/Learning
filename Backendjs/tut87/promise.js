import fs from "fs/promises"

let a = await fs.readFile("anshika.txt");
console.log(a.toString());

let b = await fs.appendFile("anshika.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(), b)