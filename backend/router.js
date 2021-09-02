const express=require('express')
const routes=express.Router()
const mainController=require('./controller/mainController')

//specified the path to each controller
routes.post('/setData',mainController.getDetail);

// routes.post('/setName',mainController.NameController)
// routes.post('/setFlag',mainController.q1Controller);
routes.get('/fetchAllData',mainController.fetchDetails)
module.exports=routes