
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userModel = require("../Model/userSchema")

const registerCTRL =  async (req,res)=>{
    try {
        const {name,username, email,password,userRole} = req.body
        const alreadyExisting = await userModel.findOne({email})
        if(alreadyExisting){
            return res.status(400).json({message:"user existed"})
        }
        const hashUser = await bcrypt.hash(password, 12)

        const newUser =  new userModel({name,username, email,password: hashUser,userRole})
        await newUser.save()
        res.status(200).json({message:"Successful", newUser})
} catch (error) {
    res.status(500).json({message:error.message})
}

}

const loginCTRL = async (req,res)=>{
    try {
        const {email, password} = req.body

       
        const user = await userModel.findOne({email}) 
        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        const isValidPassword = await bcrypt.compare(password, user.password)
        if(!isValidPassword){
            return res.status(400).json({message:"email or password not found"})
        }
        const token =  jwt.sign({email:user.email}, `${process.env.ACTIVE_TOKEN }`, {expiresIn:"20m"})

        res.status(200).json({
            message:"Successful",
             token, 
            user 
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


module.exports = {registerCTRL, loginCTRL}