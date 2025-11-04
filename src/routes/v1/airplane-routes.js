const express = require("express");
const { AirplaceController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");

const router = express.Router();

router.post(
    "/",
    AirplaneMiddlewares.validateCreateRequest,
    AirplaceController.createAirplane
);

router.get("/", AirplaceController.getAirplanes);

router.get("/:id", AirplaceController.getAirplaneById);

module.exports = router;
