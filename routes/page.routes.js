const express = require('express');
const router = express.Router();

const checkTime = require('./middlewares/checkTime.middleware')

const {displayHomePage, displayServicePage, displayContactPage} = require('../controller/page.controllers.js')

router.get('/home', checkTime.checkTime, displayHomePage);
router.get('/service', checkTime.checkTime, displayServicePage);
router.get('/contact', checkTime.checkTime, displayContactPage);

module.exports = router;