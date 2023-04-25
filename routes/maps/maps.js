const express = require("express")
const router = express.Router()

const mapController = require("../../controllers/maps/mapController")


router.get('/', mapController.findAll)
router.get('/:slug', mapController.findBySlug)
router.get('/type/:type', mapController.findByType)

module.exports = router