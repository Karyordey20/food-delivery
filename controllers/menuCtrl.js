const menuModel = require("../Model/menuSchema")

//creating menu
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

//reading a menu
const getMenu = async (req,res) =>  {
    try {
        const {id} = req.params
        const getMenu = await menuModel.findById(id)
        res.status(200).status(
            {
                message:"Succesful",
                getMenu
            }
        )
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//update menu
const updateMenu = async (req,res) =>{
   try {
     const {id} = req.params
     const {itemName,description,price,availability} =req.body
    const updateMenu = await menuModel.findByIdAndUpdate(
        id,
         {
            itemName,
            description,
            price,
            availability
        }, 
        {
            new:true
        } )
        res.status(200).json({message:"Successful", updateMenu})

   } catch (error) {
    res.status(500).json({message:error.message})
   }

}

//delete menu

const deleteMenu = async (req,res) =>{
    try {
        const {id} = req.params
        const deleteMenu = await menuModel.findByIdAndDelete(id)
        
        res.status(200).json({message:"Successful"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports = {registerMenu, getMenu,updateMenu, deleteMenu}
