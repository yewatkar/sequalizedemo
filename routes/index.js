var express = require('express');
var router = express.Router();

module.exports = (app)=>{
  router.get('/', (req, res)=>{
    res.send({ title: 'sequalize demo' });
  })
  router.post('/', (req, res)=>{
    res.send({ title: 'sequalize demo' });
  })





  app.use('/',router);
}

