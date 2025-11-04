const { asyncHandler, ApiResponse, ApiError } = require("../utils");
const { StatusCodes } = require("http-status-codes");

const validateCreateRequest = asyncHandler((req, res, next) => {
    if (!req.body.modelNumber)
        throw new ApiError(StatusCodes.BAD_REQUEST, "Model Number not found.");

    next();
});

module.exports = { validateCreateRequest };
