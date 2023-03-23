const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ashudb', 'root', '', {
    host: 'localhost',
    dialect:'mysql' 
  });

  sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully.');
  }).catch(err =>{
    console.error('Unable to connect to the database:', err.message);
  })

  const db={};

  db.sequelize=sequelize; //sequelize:sequelize 
  db.Sequelize=Sequelize;


  db.users=require('./users.model')(sequelize,Sequelize);
  db.manager=require('./manager')(sequelize,Sequelize);
  

  
module.exports =db;