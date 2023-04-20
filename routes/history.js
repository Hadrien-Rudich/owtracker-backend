const express = require("express")
const router = express.Router()

const historyController = require("../controllers/historyController")


router.get('/', historyController.findAll)

module.exports = router