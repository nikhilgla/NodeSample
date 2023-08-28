const express = require('express');
// const localForage =require('localforage');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const contactController = require('../controllers/contactus')

router.get('/contact-us', contactController.getContact);

router.post('/contact-us', contactController.postContact);

module.exports = router;
//module.exports.someText = abc;