const jwt= require("jsonwebtoken")
const { userModel } = require("../Model/userSchema")


const tokenValidation = async (req, res, next) =>{
    try {
        const tokenAuthorization = req.header("authorization")
        if(!tokenAuthorization){
            return res.status(401).json({message:"Unauthorized Access"})
        }
        const split = tokenAuthorization.split(" ")
        const getToken = split[1]
        const decode = jwt.verify(getToken, process.env.ACTIVE_TOKEN )
        if(!decode){
            return res.status(401).json({message:"Access Denied"})
        }
       const getUser = await userModel.findOne({email:decode.email})
        
       req.getUser = getUser
       next()
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

module.exports =tokenValidation