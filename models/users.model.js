module.exports =(sequelize,Sequelize)=>{
    const model=sequelize.define('users',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Name:{
            type: Sequelize.STRING(200),
            allowNull: false, 
        },
        Email:{
            type: Sequelize.STRING(200),
            allowNull: false,
            unique:true,
            validate:{isEmail:true}
        },
        Mobile:{
            type: Sequelize.STRING(15),
            allowNull: false, 
        },
        Age:{
            type:Sequelize.INTEGER(10),
            allowNull: false,

        },
        Password:{
            type: Sequelize.STRING(200),
            allowNull: false, 
        },
        Profile:{
            type: Sequelize.STRING(100),
            allowNull:true
        }

    },{
        freezeTableName: true
    });

    return model;

}