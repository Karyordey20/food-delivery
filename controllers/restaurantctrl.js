const restaurantModel = require("../Model/restaurantSchema")

const registerRestaurant = async (req,res) => {
   try {
     const {name, location, contactInfo, associatedMenu} = req.body
 
     const alreadyExisting = await restaurantModel.findOne({name})
     if(alreadyExisting){
         return res.status(200).json({message:"Restaurant existed"})
     }
 
     //all other validations can be done later
 
     const newRestaurant = new restaurantModel({name, location, contactInfo, associatedMenu} )
     await newRestaurant.save()
  
     res.status(200).json({message:"Successful", newRestaurant})
   } catch (error) {
    res.status(500).json({message:error.message})
   }
}

module.exports = {registerRestaurant}