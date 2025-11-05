const express = require("express");
const { CityController } = require("../../controllers");
const { CityMiddleware } = require("../../middlewares");

const router = express.Router();

router.post(
    "/",
    CityMiddleware.validateCreateRequest,
    CityController.createCity
);

router.get("/", CityController.getCitys);

router.get("/:id", CityController.getCityById);

router.delete("/:id", CityController.destroyCity);

router.put("/:id", CityController.updateCity);

module.exports = router;
