const mongoose = require("mongoose")
const menuModel = require("../Model/menuSchema")
menuModel()

    const restaurantSchema = new mongoose.Schema({
        email:{type:String},
        name:{type:String},
        location:{type:String},
        contactInfo: {
            phoneNumber: {type:String},
            email: {type:String}
        },
        associatedMenu:[{type: mongoose.Schema.Types.ObjectId, ref:"menuModel"}]
    },{
        timestamps:true
    })

    const restaurantModel = new mongoose.model(("restaurantModel"), restaurantSchema)

    module.exports = restaurantModel

 