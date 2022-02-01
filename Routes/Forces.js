const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();


function saveForces(){
    const p = path.join(
        path.dirname(process.mainModule.filename),
        'data',
        'Forces.json'
        );
        fs.readFile(p,(err,fileContent) =>{
            forces = JSON.parse(fileContent);
            forcesLength = forces.length;
            

            forces.push(
                forceObjs = forces
                )
            }
        
        
        
    );
            
    
    
}


module.exports = saveForces();


