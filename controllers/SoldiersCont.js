const fs = require('fs');          

const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const Results = require('../models/Results')

exports.getSoldiers = (req,res,next) => {
    U_id = '';
    res.render('soldiers', {pageTitle: 'soldiers', path:"/", U_id});
}
exports.getSoldiersByID = (req,res,next) => {
    const editing = req.query.edit;
    U_id = req.params.U_id;
    resultIds = req.params.resultIds;
    
    active = U_id === `${req.params.U_id}` ? 'soldier-btn soldier-btn:active': ''  
    res.render('soldiers', {pageTitle: 'soldiers', path:"/",active , U_id, editing,resultIds});  
};

exports.getEditSoldierById = (req,res,next) =>{
    const editing = req.query.edit;
    U_id = req.params.U_id;
    resultIds = req.params.resultIds;
    console.log(req.params.resultsIds)
    active = U_id === `${req.params.U_id}` ? 'soldier-btn soldier-btn:active': '' 
    res.render('EditSoldiers', {pageTitle: 'EditSoldiers', path:"/",active , U_id, editing,resultIds});  
};

exports.postEditSoldierByID = (req,res,next) =>{
    U_id = req.params.U_id;
    
    active = U_id === `${req.params.U_id}` ? 'soldier-btn soldier-btn:active': ''
    recievedData = req.body;
    let exercisesLength = (Object.keys(recievedData).length /2)
    for(let i=0; i<exercises.length; i++){
        exerciseValue = Object.values(recievedData)[i];
        exerciseId = Object.values(recievedData)[exercisesLength + i]
        resultData = [];
        resultData[i] = {
            id: parseInt(exerciseId)};
        resultZeroStarter = resultData[i].id -1;
        results[resultZeroStarter].grade = parseInt(exerciseValue)
        Results.results = results
        Results.saveResults();
    }
        return res.redirect('/soldiers/' + U_id) 

    };


    
   