const express = require('express')

var cors = require('cors');
const Routes=require('./router')
const sequelize=require('sequelize')
const Users=require('./model/mainModel')

//to create a server
const app=express()
//to handle the json files
app.use(express.json());

app.use(cors());

//to avoid the congestion of code in the same page router is used which is almost same like app
app.use('/api',Routes)



//to sync the table to the mysql. force true is used to make changes in the mysql database after the model is created
Users.sequelize.sync()
.then(()=>{
    app.listen(1000);
    console.log("Connected!")
})
.catch(err=>console.log(err))

