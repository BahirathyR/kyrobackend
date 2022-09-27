const express = require("express");
const router = express.Router();
const profile = require('../controllers/profile');

// ========================================================//
router.post('/profile', profile.addProfile);

router.get('/getProfile', profile.getProfile);

router.get('/getbyIDProfile/:_id', profile.getbyIDProfile)

router.post('/updateprofileById', profile.updateProfile);

//==========================================================//
module.exports = router;
