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
    const airplane = await airplaneRepository.get(id, "Airplane");
    return airplane;
}

async function destroyAriplane(id) {
    const response = await airplaneRepository.destroy(id, "Airplane");
    return response;
}

async function updateAirplane(id, data) {
    const airplane = await airplaneRepository.update(id, data, "Airplane");
    return airplane;
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplaneById,
    destroyAriplane,
    updateAirplane,
};

//  Airbus A321 |      220
