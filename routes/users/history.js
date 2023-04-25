const express = require("express")
const router = express.Router()

const historyController = require("../../controllers/user/historyController")


router.get('/', historyController.findAll)

module.exports = router