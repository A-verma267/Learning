import fsp from "fs/promises"
import fs from "fs"

import path from "path"
let basepath ="C:\\Users\\acer\\Desktop\\web_development\\learning_web_development\\backend javascript\\tut93"
let name = await fsp.readdir(basepath);
name.forEach((items)=>{
    let ext = items.split(".")[items.split(".").length-1];
    console.log(ext);
    if(ext!="js" && ext!="json" && items.split(".").length>1){
        if(fs.existsSync(path.join(basepath,ext))){
            fsp.rename(path.join(basepath,items),path.join(basepath,ext,items));
        }
        else{
            fsp.mkdir(ext);
            fsp.rename(path.join(basepath,items),path.join(basepath,ext,items));
        }
    }
})