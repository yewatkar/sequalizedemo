var express = require('express');
const { body } = require('express-validator');
var router = express.Router();
const managerController = require('../controllers/manager.controllers');

router.get('/', managerController.getAllManager);
router.post('/create',
    [
        body("Name").notEmpty().withMessage("name is required field"),
        body("Age").notEmpty().withMessage("Age is required field").isNumeric().withMessage("Age must be in number"),
        body("Mobile").notEmpty().withMessage("mobile no. is required field")

    ], managerController.createManager);

router.post('/update/:id',managerController.updateUser);


module.exports = router;
