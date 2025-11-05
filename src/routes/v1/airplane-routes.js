const express = require("express");
const { AirplaneController } = require("../../controllers");
const { AirplaneMiddleware } = require("../../middlewares");
const {
    validateUpdateRequest,
} = require("../../middlewares/airplane-middleware");

const router = express.Router();

router.post(
    "/",
    AirplaneMiddleware.validateCreateRequest,
    AirplaneController.createAirplane
);

router.get("/", AirplaneController.getAirplanes);

router.get("/:id", AirplaneController.getAirplaneById);

router.delete("/:id", AirplaneController.destroyAirplane);

router.put(
    "/:id",
    AirplaneMiddleware.validateUpdateRequest,
    AirplaneController.updateAirplane
);

module.exports = router;
