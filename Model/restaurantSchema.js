const mongoose = require("mongoose")
const menuSchema = require("./menuSchema")

    const restaurantSchema = new mongoose.Schema({
        name:{type:String},
        location:{type:String},
        contactInfo: {type:String},
        associatedMenu:[{type: mongoose.Schema.Types.ObjectId, ref: menuSchema }]
    },{
        timestamps:true
    })

    const restaurantModel = new mongoose.model(("restaurantModel"), restaurantSchema)

    module.exports = restaurantModel

