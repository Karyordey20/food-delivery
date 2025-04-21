const restaurantModel = require("../Model/restaurantSchema")
const userModel = require("../Model/userSchema")

//CREAT RESTAURANT
const restaurant = async (req,res) => {
  try {
    const {email,name,location,contactInfo,associatedMenu} = req.body

    const user = await userModel.findOne({email})
    if(!user){
      return res.status(404).json({message:"Email is not recognised!"})
    }
  
    const newRestaurant = new restaurantModel({email,name,location,contactInfo,associatedMenu})
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
  
     const restaurant = await restaurantModel.findById(id).populate("associatedMenu")
     res.status(200).json({message:"Successful", restaurant})
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

//update a restaurant

const updateRestaurant = async(req,res)=>{
  try {
    const {id} =  req.params
    const {email,name,location,contactInfo,associatedMenu} = req.body
    
    const updateUser = await restaurantModel.findByIdAndUpdate(id, 
      {
        email,
        name,
        location,
        contactInfo,
        associatedMenu
      }, 
      {new:true}
    ).populate("associatedMenu")

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