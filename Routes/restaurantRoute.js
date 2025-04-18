const express = require("express")
const {restaurant, getResaurant, updateRestaurant, deleteRestaurant} = require("../controllers/restaurantctrl")

const router = express.Router()


router.post(("/createRestaurant"), restaurant )
router.get(("/restaurant/:id"),getResaurant )
router.put(("/updateRestaurant/:id"), updateRestaurant)
router.delete(("/deleteRestaurant/:id"), deleteRestaurant)

module.exports = router