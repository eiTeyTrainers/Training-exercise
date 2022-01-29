const fs = require('fs');          

const express = require('express');

const path = require('path');

const app = express();

const Data = require('./controllers/Soldiers')
const soldiersData = require('./controllers/Results')
const forcesData = require('./controllers/Forces')
const exercisesData = require('./controllers/exercises')
app.set('view engine', 'ejs');

app.set('views', 'views')


app.use(express.static(path.join(__dirname, 'public')))


//soldier Site 
app.get('/soldiers', (req,res,next) =>{
    U_id = '';
    res.render('soldiers', {pageTitle: 'soldiers', path:"/", U_id});
});
//Soldier Button Req
app.get('/soldiers/:U_id', (req,res,next) =>{
    U_id = req.params.U_id;
    active = U_id === `${req.params.U_id}` ? 'soldier-btn soldier-btn:active': ''  
    res.render('soldiers', {pageTitle: 'soldiers', path:"/",active , U_id});  
});
//sum soldiers
app.get('/sum-of-soldiers', (req,res,next) =>{
    res.render('SumSoldiers', {pageTitle: 'Sum Soldiers',path: "/sumSoldier"});
});
//sum soldiers Req
app.get('/sum-of-soldiers/:force', (req,res,next) =>{
    force_Id = req.params.force;
    res.render('SumSoldiers', {pageTitle: 'soldiers', path:"/" , force_Id});  
});
app.get('/top-soldiers', (req,res,next) =>{
    res.render('TopSoldiers', {pageTitle: 'Sum Soldiers',path: "/topSoldier"});
});

app.listen(3000);
