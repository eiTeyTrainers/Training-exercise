const path = require('path');

const express = require('express');

const topSoldiersController = require('../controllers/topSoldiersCont');

const router = express.Router();


router.get('/top-soldiers', topSoldiersController.gettopSoldiers)

module.exports = router;