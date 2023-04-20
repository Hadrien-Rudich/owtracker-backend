const express = require("express")
const router = express.Router()

const profileController = require("../controllers/profileController")


router.get('/', profileController.findAll)
router.post('/', profileController.addProfile)
router.delete('/:profile', profileController.deleteProfile)

module.exports = router