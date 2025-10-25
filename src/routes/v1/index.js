const express = require("express");
const { InfoController } = require("../../controllers");

const router = express.Router();

router.get("/info", InfoController.info);

const AirplaneRoutes = require("./airplane-routes");

router.use("/airplanes", AirplaneRoutes);

module.exports = router;
