"use strict";

const router = require('express').Router(),
    apiController = require('../controllers/apiController');

router.get('/all', apiController.getAllCameras);
router.get('/camera', apiController.getCamera);

module.exports = router;