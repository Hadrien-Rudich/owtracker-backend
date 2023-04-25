const express = require("express")
const router = express.Router()

const roleController = require("../../controllers/heroes/roleController")


router.get('/', roleController.findAll)

module.exports = router