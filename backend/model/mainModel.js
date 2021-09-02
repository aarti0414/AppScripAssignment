// Model is  Used to access the database
// we here structure the database, by using the tablename 

const Sequelize=require('sequelize')
const sequelize=require('../util/Database')

const Users=sequelize.define('User',{
    id:{
      type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true,
          unique:true,
    },
    name:{
        type:Sequelize.STRING,
    },
    answer1:{
        type:Sequelize.STRING,    
    },
    answer2:{
      type:Sequelize.STRING,
    }
  })
  module.exports=Users;