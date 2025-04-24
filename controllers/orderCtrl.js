const menuModel = require("../Model/menuSchema")
const orderModel = require("../Model/orderSchema")
const restaurantModel = require("../Model/restaurantSchema")
const userModel = require("../Model/userSchema")

const orderFxn = async (req, res)=>{

    try {
        const {userId,restaurantId,orderedItems,quantity,price,totalCost,orderStatus} = req.body
    
        const verifyUserID = await userModel.findOne({userId:userModel.id})
        if(!verifyUserID){
            return res.status(404).json({message:"account not found"})
        }
        const verifyRestaurantId = await restaurantModel.findOne({restaurantId:restaurantModel.id})
        if(!verifyRestaurantId){
            return res.status(404).json({message:"rest account not found"})
        }
        const verifyOrderId = await menuModel.findOne({orderedItems:menuModel.menuItemsId})
        if(!verifyOrderId){
            return res.status(404).json({message:"order account not found"})
        }
        verifyOrderId.price += totalCost
        const newOrder = new orderModel({userId,restaurantId,orderedItems,quantity,price,totalCost,orderStatus}) 
        await newOrder.save()

        res.status(200).json({message:"Successful", newOrder})
    } catch (error) {

        res.status(500).json({message:error.message})
    }

}

const updateOrder = async (req,res)=>{
    try {
        const {id} = req.params
        const {deliveryPersonnel} = req.body
    
        const updateOder = await orderModel.findByIdAndUpdate(id, deliveryPersonnel).populate("deliveryPersonnel") 
           
        res.status(200).json({message:"successful", updateOder})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = {orderFxn,updateOrder}