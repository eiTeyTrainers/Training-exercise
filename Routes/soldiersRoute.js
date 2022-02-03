const path = require('path');

const express = require('express');

const soldiersController = require('../controllers/SoldiersCont');

const router = express.Router();

router.get('/soldiers', soldiersController.getSoldiers );

router.get('/soldiers/:U_id',soldiersController.getSoldiersByID)
router.get('/edit-soldiers/:U_id/', soldiersController.getEditSoldierById);

router.post('/soldiers/:U_id', soldiersController.postEditSoldierByID )

module.exports = router;