const restaurantModel = require("../Model/restaurantSchema")

//CREAT RESTAURANT
const restaurant = async (req,res) => {
  try {
    const {name,location,contactInfo,associatedMenu} = req.body
  
    const newRestaurant = new restaurantModel({name,location,contactInfo,associatedMenu})
    await  newRestaurant.save()
    res.status(200).json({
      message:"Successful", 
      newRestaurant})

  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

//read restaurant
const getResaurant = async (req,res)=>{
  try {
     const {id} = req.params
  
     const restaurant = await restaurantModel.findById(id)
     res.status(200).json({message:"Successful", restaurant})
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

//update a restaurant

const updateRestaurant = async(req,res)=>{
  try {
    const {id} =  req.params
    const {name,location,contactInfo,associatedMenu} = req.body
    
    const updateUser = await restaurantModel.findByIdAndUpdate(id, 
      {
        name,
        location,
        contactInfo,
        associatedMenu
      }, 
      {new:true}
    )

    res.status(200).json(
      {
        message:"Successful",
        updateUser}
        )
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

//delete a restaurant
const deleteRestaurant = async(req,res) => {
try {
    const {id} = req.params
    const deleteRes = await restaurantModel.findByIdAndDelete(id)
    res.status(200).json({mesage:"successful"})
} catch (error) {
  res.status(500).json({message:error.message})
}}

module.exports = {restaurant,getResaurant,updateRestaurant, deleteRestaurant}