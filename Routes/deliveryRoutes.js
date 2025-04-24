
const express = require("express")
const {delivery, getDeliveryPersonel} = require("../controllers/deliveryCtrl")

const deliveryRoute = express.Router()


deliveryRoute.post(("/delivery-personnel"),delivery )
deliveryRoute.get(("/personel"), getDeliveryPersonel)

module.exports = deliveryRoute