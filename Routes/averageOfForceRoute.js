const path = require('path');

const express = require('express');

const averageOfForcesController = require('../controllers/averageOfForcesCont');

const router = express.Router();

//sum soldiers
router.get('/average-of-forces',averageOfForcesController.getAverageOfForces);

router.get('/average-of-forces/:force_Id', averageOfForcesController.getAverageOfForcesByID);
module.exports = router;