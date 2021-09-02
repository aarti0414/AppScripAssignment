const Sequelize = require('sequelize');

//connecting it with the sql Database
const sequelize = new Sequelize('trivia-app','root','testroot',{
    dialect : 'mysql',
    host : 'localhost'
})

module.exports=sequelize;