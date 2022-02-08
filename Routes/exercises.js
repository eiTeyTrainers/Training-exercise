const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();


function saveExercises(){
    let exercisesData = [];
    const p = path.join(
        path.dirname(process.mainModule.filename),
        'data',
        'exercises.json'
        );
        fs.readFile(p,(err,fileContent) =>{
            exercisesData = JSON.parse(fileContent);
            exercisesLength = exercisesData.length;
            

            exercisesData.push(
                exerciseObjs = exercisesData
                )
            }
        
        
        
    );
            
    
    
}

    

module.exports = saveExercises()



