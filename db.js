const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const connectDatabase = () => {

      mongoose.connect(`${process.env.DATABASE}`).
      then(() => console.log("Database connected ..."))
  } 


module.exports = connectDatabase