const deliveryModel = require("../Model/delivery")


const delivery = async (req,res) =>{
   try {
     const {name, contactInfo,vehicleDetail,status} = req.body
 
     const deliveryPersonnel = new deliveryModel({name, contactInfo,vehicleDetail,status} )
     await deliveryPersonnel.save()

     res.status(200).json({message:"Successful",deliveryPersonnel})
   } catch (error) {
    res.status(500).json({message:error.message})
   }
}

const getDeliveryPersonel = async (req,res) =>{

   try {
     const findPersonel = await deliveryModel.findOne()
     res.status(200).json({message:findPersonel})
   } catch (error) {
    res.status(500).json({message:error.message})
   }
 
}

module.exports = {delivery,getDeliveryPersonel}