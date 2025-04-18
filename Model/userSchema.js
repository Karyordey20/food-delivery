

const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
        name:{type:String, require:true},
        username:{type:String,require:true},
        email:{type:String, require:true},
        password:{type:String, require:true},
        userRole:{type: String, require:true}
},
{
        timestamps:true
})

const userModel = new mongoose.model("userModel", userSchema)

module.exports = userModel