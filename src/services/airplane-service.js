const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const { ApiError } = require("../utils");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        if (error.name == "SequelizeValidationError") {
            let errorList = [];
            error.errors.forEach((error) => {
                errorList.push(error.message);
            });
            throw new ApiError(
                StatusCodes.BAD_REQUEST,
                errorList.toString(),
                errorList
            );
        }
        throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
}

async function getAirplanes() {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
}

async function getAirplaneById(id) {
    const airplane = await airplaneRepository.get(id);
    return airplane;
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplaneById,
};
