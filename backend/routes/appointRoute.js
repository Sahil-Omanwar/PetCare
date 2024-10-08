const express = require('express');
const router = express.Router();
const { createAppoint } = require('../controller/AppointController.js'); 

router.post('/', createAppoint);



module.exports = router;
