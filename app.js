var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var logger = require('morgan');
const db= require('./models');
require('./schedulers/schedule');



var usersRouter = require('./routes/users');
const managerRouter=require('./routes/manager')
let middleware= require('./middleware/jwt.middleware');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));
require('./routes/index')(app);



db.sequelize.sync();
app.use('/auth',require('./routes/auth'));
app.use('/users',middleware.checkToken, usersRouter);
app.use('/manager',managerRouter);




module.exports = app;
