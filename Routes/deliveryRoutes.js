
const express = require("express")
const delivery = require("../controllers/deliveryCtrl")

const deliveryRoute = express.Router()


deliveryRoute.post(("/delivery-personnel"),delivery )

module.exports = deliveryRoute