const express = require("express")
const { registerRestaurant } = require("../controllers/restaurantctrl")


const restaurantRoute = express.Router()

restaurantRoute.post(("/register_restaurant"), registerRestaurant )

module.exports = restaurantRoute