const fs = require('fs');          

const express = require('express');

const path = require('path');
const app = express();

const Data = require('./Routes/Soldiers')
const soldiersData = require('./Routes/Results')
const forcesData = require('./Routes/Forces')
const exercisesData = require('./Routes/exercises')
app.set('view engine', 'ejs');

app.set('views', 'views')


app.use(express.static(path.join(__dirname, 'public')))
// get current of parent id find all of children
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
app.get('/average-of-forces', (req,res,next) =>{
    force_Id = req.params.force;
    res.render('averageOfForces', {pageTitle: 'Avarage Of Forces',path: "/avarage-of-forces",force_Id});
});
//sum soldiers Req
app.get('//average-of-forces:force', (req,res,next) =>{
    force_Id = req.params.force;
    res.render('averageOfForces', {pageTitle: 'soldiers', path:"/" , force_Id});  
});
app.get('/top-soldiers', (req,res,next) =>{

    res.render('TopSoldiers', {pageTitle: 'Top  Soldiers',path: "/topSoldier"   });
});

app.listen(3000);
