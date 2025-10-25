const { AirplaneRepository } = require("../repositories");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        // Return the created airplane so controllers get the created resource
        return airplane;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createAirplane,
};
