const { asyncHandler, ApiError } = require("../utils");
const { StatusCodes } = require("http-status-codes");

const validateCreateRequest = asyncHandler((req, res, next) => {
    if (!req.body.name)
        throw new ApiError(StatusCodes.BAD_REQUEST, "City name required");

    next();
});

const validateUpdateRequest = asyncHandler((req, res, next) => {
    if (!req.body.name)
        throw new ApiError(StatusCodes.BAD_REQUEST, "City name required");

    next();
});

module.exports = { validateCreateRequest, validateUpdateRequest };
