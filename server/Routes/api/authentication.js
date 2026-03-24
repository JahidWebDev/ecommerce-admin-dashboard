const express = require("express");
const registrationControllers = require("../../controllers/registrationControllers");
const router = express.Router();


router.post("/registration", registrationControllers ) 



module.exports = router;