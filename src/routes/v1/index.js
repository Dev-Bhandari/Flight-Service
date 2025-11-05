const express = require("express");
const { InfoController } = require("../../controllers");

const router = express.Router();

router.get("/info", InfoController.info);

const AirplaneRoutes = require("./airplane-routes");
const CityRoutes = require("./city-routes");

router.use("/airplanes", AirplaneRoutes);

router.use("/cities", CityRoutes);

module.exports = router;
