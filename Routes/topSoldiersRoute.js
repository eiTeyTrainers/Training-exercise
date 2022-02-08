const path = require('path');

const express = require('express');

const topSoldiersController = require('../controllers/topSoldiersCont');

const router = express.Router();


router.get('/top-soldiers', topSoldiersController.gettopSoldiers)

router.get('/top-soldiers/:U_id/', topSoldiersController.gettopSoldiersById)

module.exports = router;