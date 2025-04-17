

const registerValidate = async (req,res, next) =>{
   try {
     const {email, password} = req.body
 
     if(!email){
       return  res.status(400).json({message:"email is required"})
     }else if(!validateEmail(email)){
       return  res.status(400).json({message:"email format incorrect"})
     }
    //  const alreadyExisting = await Model.findOne({email })
    //  if(alreadyExisting){
    //   return  res.status(400).json({message:"user existed"})
    //  }

     //pasword validation

     if(!password){
      return  res.status(400).json({message:"password is required"})
     } else if(password < 8){
      return  res.status(400).json({message:"password must be more than seven characters"})
     }
    // //  const encrypt = await bcrypt.hash(password,12)
     
   } catch (error) {
     res.status(500).json({message:error.message})
   }

   next()
}

const loginValidate = async (req,res, next) =>{
  try {
    const {email, password} = req.body

    if(!email){
      return  res.status(400).json({message:"email is required"})
    }else if(!validateEmail(email)){
      return  res.status(400).json({message:"email format incorrect"})
    }
   //  const alreadyExisting = await Model.findOne({email })
   //  if(alreadyExisting){
   //   return  res.status(400).json({message:"user existed"})
   //  }

    //pasword validation

    if(!password){
     return  res.status(400).json({message:"password is required"})
    } else if(password < 8){
     return  res.status(400).json({message:"password must be more than seven characters"})
    }
 
    // const alreadyExisting = await userModel.findOne({email})
    // if(!alreadyExisting){
    //     return res.status(404).json({message:"User not found"})
    // }

    
  } catch (error) {
    res.status(500).json({message:error.message})
  }
  next()
}



function validateEmail(email) {

  const emailPattern = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  
  return emailPattern.test(String(email).toLocaleLowerCase());
  
  }

  module.exports = {registerValidate,loginValidate}