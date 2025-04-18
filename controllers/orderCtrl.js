const menuModel = require("../Model/menuSchema")
const orderModel = require("../Model/orderSchema")
const restaurantModel = require("../Model/restaurantSchema")
const userModel = require("../Model/userSchema")

const orderFxn = async (req, res)=>{

    try {
        const {userId,restaurantId,orderedItems,quantity,price,totalCost,orderStatus} = req.body
    
        const verifyUserID = await userModel.findOne({userId})
        if(!verifyUserID){
            return res.status(404).json({message:"account not found"})
        }
        const verifyRestaurantId = await restaurantModel.findOne({restaurantId})
        if(!verifyRestaurantId){
            return res.status(404).json({message:"account not found"})
        }
        const verifyOrderId = await menuModel.findOne({orderedItems})
        if(!verifyOrderId){
            return res.status(404).json({message:"account not found"})
        }
    
        const newOrder = new orderModel({userId,restaurantId,orderedItems,quantity,price,totalCost,orderStatus})
        await newOrder.save()

        res.status(200).json({message:"Successful", newOrder})
    } catch (error) {

        res.status(500).json({message:error.message})
    }

}

module.exports = orderFxn