const mongoose = require("mongoose")

const menuSch = new mongoose.Schema({
    itemName: {type:String},
    description:{type:String},
    price: {type:Number, default:0},
    availability:{type:String}
},
{
    timestamps:true

})

const menuModel = new mongoose.model(("menuModel"), menuSch)

module.exports = menuModel