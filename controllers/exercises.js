const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();


function saveExercises(){
    let exercises = [];
    const p = path.join(
        path.dirname(process.mainModule.filename),
        'data',
        'soldiers.json'
        );
        fs.readFile(p,(err,fileContent) =>{
            exercises = JSON.parse(fileContent);
            exercisesLength = exercises.length;
            

            exercises.push(
                exerciseObjs = exercises
                )
            }
        
        
        
    );
            
    
    
}


module.exports = saveExercises();


