const express = require("express")
const { registerCTRL, loginCTRL} = require("../controllers/registerCtrl")
const { registerValidate, loginValidate } = require("../validations/Validation")

const Router = express.Router()

Router.post(("/register"),registerValidate ,registerCTRL)
Router.post(("/login"), loginValidate, loginCTRL)


module.exports = Router