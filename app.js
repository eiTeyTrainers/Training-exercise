const fs = require('fs');          

const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();


const Soldiers = require('./models/Soldiers')
const Results = require('./models/Results')
const Forces = require('./models/Forces')
const Exercises = require('./models/exercises');

const soldiersRoutes = require('./Routes/soldiersRoute')
const averageOfForcesRoutes = require('./Routes/averageOfForceRoute')
const topSoldiersRoute = require('./Routes/topSoldiersRoute')

app.set('view engine', 'ejs');

app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
// get current of parent id find all of children
//soldier Site 
//Soldier Button Req
app.use(soldiersRoutes);
app.use(averageOfForcesRoutes);
app.use(topSoldiersRoute);




app.listen(3000);
