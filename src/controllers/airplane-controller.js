const { asyncHandler, ApiResponse } = require("../utils");
const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");

const createAirplane = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { modelNumber, capacity } = req.body;

    const airplane = await AirplaneService.createAirplane({
        modelNumber,
        capacity,
    });

    return res
        .status(StatusCodes.CREATED)
        .json(
            new ApiResponse(
                StatusCodes.CREATED,
                airplane,
                "Successfully created an airplane"
            )
        );
});

const getAirplanes = asyncHandler(async (req, res) => {
    const airplanes = await AirplaneService.getAirplanes();
    return res
        .status(StatusCodes.OK)
        .json(
            new ApiResponse(
                StatusCodes.OK,
                airplanes,
                "Fetched all airplanes successfully"
            )
        );
});

const getAirplaneById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const airplane = await AirplaneService.getAirplaneById(id);
    return res
        .status(StatusCodes.OK)
        .json(
            new ApiResponse(
                StatusCodes.OK,
                airplane,
                "Fetched airplane successfully"
            )
        );
});

const destroyAirplane = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const response = await AirplaneService.destroyAirplane(id);
    return res
        .status(StatusCodes.OK)
        .json(
            new ApiResponse(
                StatusCodes.OK,
                response,
                "Airplane deleted successfully"
            )
        );
});

const updateAirplane = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { capacity } = req.body;
    const response = await AirplaneService.updateAirplane(id, { capacity });
    return res
        .status(StatusCodes.OK)
        .json(
            new ApiResponse(
                StatusCodes.OK,
                response,
                "Airplane updated successfully"
            )
        );
});

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplaneById,
    destroyAirplane,
    updateAirplane,
};
