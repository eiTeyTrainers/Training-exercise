const fs = require('fs');          

const express = require('express');

const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.set('views', 'views')

const allTabRoute = require('./Routes/AllTabs');

app.use(express.static(path.join(__dirname, 'public')))

const data = require('./controllers/dataCollector')
app.get('/soldiers', (req,res,next) =>{
    res.render('soldiers', {pageTitle: 'soldiers', path:"/"});
});
app.get('/sum-of-soldiers', (req,res,next) =>{
    res.render('SumSoldiers', {pageTitle: 'Sum Soldiers',path: "/sumSoldier"});
});
app.get('/top-soldiers', (req,res,next) =>{
    res.render('TopSoldiers', {pageTitle: 'Top Soldiers',path:"/"});
});

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
}
save();
app.listen(3000);