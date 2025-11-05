const { StatusCodes } = require("http-status-codes");
const { CityRepository } = require("../repositories");
const { ApiError } = require("../utils");

const cityRepository = new CityRepository();

async function createCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
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

async function getCitys() {
    const cities = await cityRepository.getAll();
    return cities;
}

async function getCityById(id) {
    const city = await cityRepository.get(id, "City");
    return city;
}

async function destroyCity(id) {
    const response = await cityRepository.destroy(id, "City");
    return response;
}

async function updateCity(id, data) {
    const city = await cityRepository.update(id, data, "City");
    return city;
}

module.exports = {
    createCity,
    getCitys,
    getCityById,
    destroyCity,
    updateCity,
};
