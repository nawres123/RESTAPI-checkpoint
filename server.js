
const express = require("express");
//require env variable
require("dotenv").config({path: './config/.env'})
const users = require('./Model/user')
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())


app.listen(PORT, (err) => {
    
   err?console.error(err) : console.log(`server is running in PORT ${PORT}`)
})
//Add users
/*
app.post('/api/user', (req, res) => {
    const {name,age}=req.body
    users.create({name:name,age:age},err=>{
        err?res.send("add user failed"):res.send("add user succeeded")
    })
})
*/

//getting the list of users

/*
app.get('/api/user', async(req, res) => {
    try{
    const data= await users.find({}).exec()
    res.json({users:data})
    }
    catch(err){
        res.send("finding users failed")
    }
})
*/

//update by Id

/*
app.put('/api/user/:id',(req,res)=>{
    users.findByIdAndUpdate(req.params.id,req.body,err=>{
        err? res.json({msg:"update failed"}): res.json({msg:"update succeedd"})
    })
})
*/

//Delete By Id

/*
app.delete('/api/user/:id',(req,res)=>{
    users.findByIdAndRemove(req.params.id,err=>{
        err? res.json({msg:"Deletion failed"}): res.json({msg:"Deletion succeedd"})
    })
})
*/
