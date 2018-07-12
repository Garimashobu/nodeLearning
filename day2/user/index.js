var express = require('express');
var router = express.Router();
var userController =require('./user.controller');

router.post('/create', userController.create);

module.exports = router;
