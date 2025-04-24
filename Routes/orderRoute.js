const express = require("express")
const {orderFxn, updateOrder} = require("../controllers/orderCtrl")


 const orderRoute =  express.Router()

 orderRoute.post(("/order"), orderFxn)
 orderRoute.put(("/getOrder:id"), updateOrder)

 module.exports = orderRoute