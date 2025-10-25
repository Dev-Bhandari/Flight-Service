const express = require("express");
const { AirplaceController } = require("../../controllers");

const router = express.Router();

router.post("/", AirplaceController.createAirplane);

module.exports = router;
