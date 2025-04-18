const express = require("express")
const orderFxn = require("../controllers/orderCtrl")


 const orderRoute =  express.Router()

 orderRoute.post(("/order"), orderFxn)

 module.exports = orderRoute