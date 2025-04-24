const express = require("express")
const {orderFxn, updateOrder, getOrder} = require("../controllers/orderCtrl")


 const orderRoute =  express.Router()

 orderRoute.post(("/order"), orderFxn)
 orderRoute.patch(("/updateOrder/:id"), updateOrder)
 orderRoute.get(("/getOrder"), getOrder)

 module.exports = orderRoute