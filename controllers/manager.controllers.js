const db = require('../models');
//const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');


const sequelize = db.sequelize;
const manager = db.manager;

module.exports = {
    getAllManager: (req, res) => {
        sequelize.query('select * from users').then((manager) => {
            res.send(manager[0]);
        }).catch((err) => {
            res.send(err.message);
        })
    },
    createManager: (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.json(errors)
        } else {

        const data = {
            Name: req.body.Name,
            Age:req.body.Age,
            Mobile: req.body.Mobile,
            
        }
        manager.create(data).then((manager) => {
            res.send(manager);
        }).catch((err) => {
            res.send(err.message);
        })
    }
},
updateUser: (req, res) => {
    const error= validationResult(req);
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
