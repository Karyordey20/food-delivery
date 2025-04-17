const express = require("express")
const { registerCTRL, loginCTRL} = require("../controllers/registerCtrl")

const Router = express.Router()

Router.post(("/register"), registerCTRL)
Router.post(("/login"), loginCTRL)


module.exports = Router