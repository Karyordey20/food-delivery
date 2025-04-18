const menuModel = require("../Model/menuSchema")

const registerMenu = async (req,res)=>{
   try {
     const {itemName,description,price,availability} = req.body
     const newMenu = new menuModel({itemName,description,price,availability})
     await newMenu.save()
     res.status(200).json({message:"Successful", newMenu})
   } catch (error) {
    res.status(500).json({message:error.message})
   }
}

module.exports = registerMenu
