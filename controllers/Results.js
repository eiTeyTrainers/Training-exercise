const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();


function saveResults(){
    let results = [];
    const p = path.join(
        path.dirname(process.mainModule.filename),
        'data',
        'results.json'
        );
        fs.readFile(p,(err,fileContent) =>{
            results = JSON.parse(fileContent);
            resultsLength = results.length;   

    
            results.push(
                soldiersResults = results
                )
            }
            
        
        
    );
            
}

module.exports = saveResults();


