const express = require("express")
const {restaurant, getResaurant, updateRestaurant, deleteRestaurant} = require("../controllers/restaurantctrl")
const restaurantEmailValidaation = require("../validations/restaurantValidation")
// const tokenValidation = require("../validations/tokenValidation")

const router = express.Router()


router.post(("/createRestaurant"),restaurantEmailValidaation, restaurant )
router.get(("/restaurant/:id"),getResaurant )
router.put(("/updateRestaurant/:id"), updateRestaurant)
router.delete(("/deleteRestaurant/:id"), deleteRestaurant)

module.exports = router