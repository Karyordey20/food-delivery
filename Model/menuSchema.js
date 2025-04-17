const mongoose = require("mongoose")

const menuSch = new mongoose.Schema({
    itemName: {type:String},
    description:{type:String},
    price: {type:String},
    availability:{type:Boolean}
},
{
    timestamps:true

})

const menuModel = new mongoose.model(("menuModel"), menuSch)

module.exports = menuModel