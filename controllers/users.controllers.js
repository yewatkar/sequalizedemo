const db = require('../models');
const bcrypt = require('bcrypt');
const sendMail =require('./sendmail');
const { validationResult } = require('express-validator');


const sequelize = db.sequelize;
const users = db.users;

module.exports = {
    getAllUsers: (req, res) => {
        var pageNumber = parseInt(req.body.page);
        var numberofRows = parseInt(req.body.limit);
        var offset=(pageNumber-1)*numberofRows;
        var fetchrow=numberofRows; 

        sequelize.query(`select * from users LIMIT ${offset}, ${fetchrow}`).then((users) => {
            res.send(users[0]);
        }).catch((err) => {
            res.send(err.message);
        })
    },
    createUser: (req, res) => {
        const errors = validationResult(req);

        // If some error occurs, then this
        // block of code will run
      
        if (!errors.isEmpty()) {
            res.json(errors)
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(req.body.Password, salt);
            const data = {
                Name: req.body.Name,
                Email: req.body.Email,
                Mobile: req.body.Mobile,
                Age: req.body.Age,
                Password: hashPassword,
                //Profile:req.file.filename
            }
            users.create(data).then((user) => {
                sendMail(req.body.Email)
                res.send(user);
            }).catch((err) => {
                res.send(err.message);
            })
        }
    },
    updateUser: (req, res) => {
        const errors= validationResult(req);
        if (!errors.isEmpty()) {
            res.json(errors)
        } else{
        let id = req.params.id;
        const data = {

            Mobile: req.body.Mobile,
            Age: req.body.Age,
        }
        users.update(data, { where: { id: id } }).then((user) => {
            res.send(user);
        }).catch((err) => {
            res.send(err.message);
        })
    }
    },
    findUser: (req, res) => {
        let id = req.params.id;

        users.findAll({ where: { id: id } }).then((user) => {
            res.send(user);
        }).catch((err) => {
            res.send(err.message);
        });
    }

}



