const fs = require('fs');
const path = require('path');
function save(){
    let soldiersNames = [];
    let data = [];
    const p = path.join(
        path.dirname(process.mainModule.filename),
        'data',
        'Forces.json'
        );
        fs.readFile(p,(err,fileContent) =>{
            
            data = JSON.parse(fileContent);
        for (let i = 0; i < data.length; i++){
            
            if(data[i].U_id){
                soldierName = data[i].name;
                data.push(
                    `<li><%= soldierName %><li>`
                )
                console.log(soldierName);
            }
            
        }
        
    });
    
    return soldiersNames;
}
module.exports = save();

