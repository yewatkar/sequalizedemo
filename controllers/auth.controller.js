
const bcrypt =require('bcrypt');
const { validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
const db=require('../models');
const { where } = require("sequelize");
const users=db.users;

module.exports={
    userLogin:(req, res)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});

        }else{
            let username=req.body.username;
            let password=req.body.password;
            users.findAll({where:{Email:username}}).then((data)=>{
                console.log(data)

                const isSame=bcrypt.compareSync(password,data[0].Password);
                if(isSame){
                    let token=jwt.sign({id:data[0].id},"secret",{expiresIn:'1h'});
                    res.send({error:false,token:token});
                }else{
                    res.send({error:true,Message:"Invalid username and password"})
                }
            }).catch(error=>{res.send(error)})
        }
    }
}


    
        