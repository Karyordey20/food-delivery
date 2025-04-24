const mongoose = require("mongoose")


const deliverySchema = new mongoose.Schema({
    name:{type:String, require},
    contactInfo:{type:String, require},
    vehicleDetail:{type:String,require},
    status:{type:String}
})

const deliveryModel = new mongoose.model(("delivery"), deliverySchema)

module.exports = deliveryModel