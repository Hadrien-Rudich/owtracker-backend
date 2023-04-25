const express = require("express")
const router = express.Router()

const mapTypeController = require("../../controllers/maps/typeController")


router.get('/', mapTypeController.findAll)

module.exports = router