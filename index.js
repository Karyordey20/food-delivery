const express = require("express")
const mongooseDB = require("./db")
const Router = require("./Routes/appRoutes")
const tokenValidation = require("./validations/tokenValidation")
// const restaurantRoute = require("./Routes/restaurantRoute")
const { registerValidate, loginValidate } = require("./validations/Validation")
const router = require("./Routes/restaurantRoute")
const menuRouter = require("./Routes/menuRoute")
const orderRoute = require("./Routes/orderRoute")


const app = express()

app.use(express.json())
mongooseDB()
// userModel()


const PORT = process.env.PORT || 7000

app.listen(PORT, () =>{
    console.log(`server running at port ${PORT}`)
})

app.get(("/"), (req,res)=>{
    res.status(200).json({message:"welcome to Food Delivery database"})
})

app.use(("/api"),registerValidate, Router)//register user
app.use(("/api"),loginValidate, Router)//login user
app.use(("/api"), router)//restaurant
app.use(("/api"), menuRouter)//menu
app.use(("/api"), orderRoute)//order 

//restaurant CRUD
// app.use(("/api"), restaurantRoute)






// to get all users
app.get(("/user"), async(req,res)=>{
    try {
      const getAll = await userModel.find()
      res.status(200).json({message:"sucessful", getAll})
    } catch (error) {
     res.status(500).json({message:error.message})
    }
 })

 //to delete all users
app.delete(("/delete"), async(req,res)=>{
    try {
      const getAll = await userModel.deleteMany()
      res.status(200).json({message:"sucessful"})
    } catch (error) {
     res.status(500).json({message:error.message})
    }
 })


 //to verify the tokenRoute
 app.post(("/auth"),tokenValidation, (req,res)=>{
    res.status(200).json({message:"Successful", user:req.getUser})
 }) 

 //getting list of restuarant owers
 app.get(("/auth/:name"), async (req,res)=>{
 try {
           const {name} = req.params
            const getUser = await userModel.findOne({name})
            res.status(200).json({user:getUser})
 
 } catch (error) {
    res.status(500).json({message:error.message})
 }
})