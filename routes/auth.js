var express = require('express');
var router = express.Router();
const Authcontroller = require('../controllers/auth.controller');
const { body } = require("express-validator");

/* GET users listing. */

router.post('/login',
  
    [body('username').notEmpty().withMessage("email is required field"),
    
    body("password").notEmpty().withMessage("password is required field")
    ],

    Authcontroller.userLogin);




module.exports = router;
