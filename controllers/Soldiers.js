const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();


function saveSoldiers(){
    let soldiers = [];
    const p = path.join(
        path.dirname(process.mainModule.filename),
        'data',
        'soldiers.json'
        );
        fs.readFile(p,(err,fileContent) =>{
            soldiers = JSON.parse(fileContent);
            soldiersLength = soldiers.length;
            

            soldiers.push(
                soldierProfiles = soldiers
                )
            }
        
        
        
    );
            
    
    
}


module.exports = saveSoldiers();


