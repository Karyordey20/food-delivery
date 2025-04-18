const express = require("express")
const restaurant = require("../controllers/restaurantctrl")

const router = express.Router()


router.post(("/createRestaurant"), restaurant )

module.exports = router