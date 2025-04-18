const express = require("express")
const { registerMenu, getMenu, updateMenu, deleteMenu } = require("../controllers/menuCtrl")

const menuRouter = express.Router()

menuRouter.post(("/registerMenu"), registerMenu)
menuRouter.get(("/getMenu/:id"), getMenu)
menuRouter.put(("/updateMenu/:id"), updateMenu)
menuRouter.delete(("/deleteMenu/:id"),deleteMenu )

module.exports = menuRouter