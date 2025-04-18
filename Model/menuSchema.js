const mongoose = require("mongoose")

const menuSch = new mongoose.Schema({
    itemName: {type:String},
    description:{type:String},
    price: {type:Number, default:0},
    availability:{type:Boolean}
},
{
    timestamps:true

})

const menuModel = new mongoose.model(("menuModel"), menuSch)

module.exports = menuModel