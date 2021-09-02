const Users=require('../model/mainModel')




// dealing with User Data
exports.getDetail=(req,res)=>{

    const {name,answer1,answer2}=req.body;
    // const detail=name,answer1,answer1
    console.log("answer1: "+answer1);
    // req.user.create({name,q1,q2})
    // .then(result=>{
    //     return res.status(201).json({result,success:true});
    // }).catch(err=>{
    //     return res.status(403).json({success:false,error:err})
    // })
    Users.create({name,answer1,answer2}).then(game=>{
        console.log("fron frontend: "+JSON.stringify(req.body));
        res.status(201).json({game,'message':'successss'})
    })
    .catch(err=>{
        console.log(err);
        res.json(err)
    })
  
}
  
 //to send all the details stored in the database to the user
 exports.fetchDetails=(req,res)=>{
    Users.findAll()
    .then(games =>{
        console.log("Got successfully")
       return res.status(200).json({games,"message":"successs"})
    })
    .catch(err=>{res.json(err)})
}