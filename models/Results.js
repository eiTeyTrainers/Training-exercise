const fs = require('fs');
const path = require('path');
const soldiersController = require('../controllers/SoldiersCont.js');

let updatedResults = soldiersController.updatedResults;
function loadResults(){
    const p = path.join(
        path.dirname(process.mainModule.filename),
        'data',
        'results.json'
        );
        fs.readFile(p,(err,fileContent) =>{
            results = JSON.parse(fileContent);
            console.log(err)
        }
        );
        
        }
        exports.saveResults =() => {
            const p = path .join(
                path.dirname(process.mainModule.filename),
                'data',
                'results.json'
                );
                fs.writeFile(p,'' ,err => { 
                    console.log(err)
                    
                 })
                fs.writeFile(p, JSON.stringify(results),err => { 
                    console.log(err)
                    
                 })
        }

module.exports = loadResults();



