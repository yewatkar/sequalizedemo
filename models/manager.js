module.exports =(sequelize,Sequelize)=>{
    const model=sequelize.define('manager',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Name:{
            type: Sequelize.STRING(200),
            allowNull: false, 
        },
        Age:{
            type:Sequelize.INTEGER(5),
            allowNull:false,
        },
        Mobile:{
            type: Sequelize.STRING(20),
            allowNull: false
        }
        
    },
    {
        freezeTableName: true
    });

    return model;

}