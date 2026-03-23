const express = require("express");
const registrationControllers = require("../../controllers/registrationControllers");
const router = express.Router();


router.get("/registration", registrationControllers ) 



module.exports = router;