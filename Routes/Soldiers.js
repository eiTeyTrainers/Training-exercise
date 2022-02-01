const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();


function saveSoldiers(){
    const p = path.join(
        path.dirname(process.mainModule.filename),
        'data',
        'soldiers.json'
        );
        fs.readFile(p,(err,fileContent) =>{
            soldiers = JSON.parse(fileContent);
            soldiers.push(
                soldierProfiles = soldiers
                )
            }
        
        
        
    );
            
    
    
}


module.exports = saveSoldiers();


