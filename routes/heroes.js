const express = require("express")
const router = express.Router()

const heroController = require("../controllers/heroController")


router.get('/', heroController.findAll)
router.get('/:slug', heroController.findBySlug)
router.get('/role/:type', heroController.findByRole)

module.exports = router