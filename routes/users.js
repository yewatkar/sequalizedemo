var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users.controllers');
const { body, param } = require("express-validator");
const multer=require('multer');

const storage =multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,"uploads/");
    },
    filename:(req,file,cb)=>{
        const uniqueSuffix=Date.now();
        let ext=file.originalname.substring(file.originalname.lastIndexOf('.'),file.originalname.length);
        cb(null,file.fieldname +"-"+uniqueSuffix+ext);
    },
});

const upload=multer({storage: storage});



/* GET users listing. */
router.post('/', usersController.getAllUsers);
router.post('/create',upload.single('Profile'),
    [body('Name').notEmpty().withMessage("name is required field"),
    body('Email').notEmpty().withMessage("email is required field"),
    body("Mobile").notEmpty().withMessage("mobile no. is required field"),
    body("Age").notEmpty().withMessage("Age is required field").isNumeric().withMessage("Age must be in number"),
    body("Password").notEmpty().withMessage("password is required field")
    ],

    usersController.createUser);
router.post('/update/:id',
    [
        body("Mobile").notEmpty().withMessage("mobile no. is required field"),
        body("Age").notEmpty().withMessage("Age is required field").isNumeric().withMessage("Age must be in number"),
    ],
    usersController.updateUser);
router.post('/find/:id', usersController.findUser);



module.exports = router;
