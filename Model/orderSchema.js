const mongoose = require("mongoose")
const userModel = require("../Model/userSchema")
const restaurantModel = require("../Model/restaurantSchema")
const menuModel = require("../Model/menuSchema")
restaurantModel()
userModel()
menuModel()
const orderSChema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "userModel"},
    restaurantId:{type:mongoose.Schema.Types.ObjectId, ref:"restaurantModel"},
    orderedItems: [{type: mongoose.Schema.Types.ObjectId, ref:"menuModel"}],

    quantity:{type:Number, default:0},
    price: {type:Number, default:0, new:true},
    totalCost : {type: Number, default: 0},
    orderStatus: {type: String,default: "pending"}
},
{
    timestamps: true

})

const orderModel = new mongoose.model(("orderModel"), orderSChema)


module.exports = orderModel