const restaurantModel = require("../Model/restaurantSchema")

const restaurant = async (req,res) => {
  try {
    const {name,location,contactInfo,associatedMenu} = req.body
  
    const newRestaurant = new restaurantModel({name,location,contactInfo,associatedMenu})
    await new newRestaurant.save()
    res.status(200).json({
      message:"Successful", 
      newRestaurant})

  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

module.exports = restaurant