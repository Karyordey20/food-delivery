const { validateEmail } = require("./Validation")

const restaurantEmailValidaation = async (req,res, next) =>{
    const {email} = req.body
    if(!email){
        return res.status(400).json({message:"please input your email!"})
    }else if(!validateEmail(email)){
        return res.status(400).json({message:"email format is incorrect"})
    }
 next()
}

module.exports = restaurantEmailValidaation