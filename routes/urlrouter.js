const express = require("express");
const {GenerateNewShortURL, Getclicks } = require('../controller/urlcontroller')
const router = express.Router();


router.post("/", GenerateNewShortURL);

router.get('/clicks/:shortId', Getclicks );
module.exports = router;
 