const { asyncHandler, ApiResponse } = require("../utils");
const { StatusCodes } = require("http-status-codes");
const { CityService } = require("../services");

const createCity = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name } = req.body;

    const city = await CityService.createCity({
        name,
    });

    return res
        .status(StatusCodes.CREATED)
        .json(
            new ApiResponse(
                StatusCodes.CREATED,
                city,
                "Successfully created an city"
            )
        );
});

const getCitys = asyncHandler(async (req, res) => {
    const cities = await CityService.getCitys();
    return res
        .status(StatusCodes.OK)
        .json(
            new ApiResponse(
                StatusCodes.OK,
                cities,
                "Fetched all cities successfully"
            )
        );
});

const getCityById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const city = await CityService.getCityById(id);
    return res
        .status(StatusCodes.OK)
        .json(
            new ApiResponse(StatusCodes.OK, city, "Fetched city successfully")
        );
});

const destroyCity = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const response = await CityService.destroyCity(id);
    return res
        .status(StatusCodes.OK)
        .json(
            new ApiResponse(
                StatusCodes.OK,
                response,
                "City deleted successfully"
            )
        );
});

const updateCity = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const response = await CityService.updateCity(id, { name });
    return res
        .status(StatusCodes.OK)
        .json(
            new ApiResponse(
                StatusCodes.OK,
                response,
                "City updated successfully"
            )
        );
});

module.exports = {
    createCity,
    getCitys,
    getCityById,
    destroyCity,
    updateCity,
};
