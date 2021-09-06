const mongoose = require("mongoose");
const {Schema,model}=mongoose;

const schemaUser=new Schema({
    name:{type:String, required:true},
    age:{type:Number}
})

const users=model("users",schemaUser)

module.exports=users