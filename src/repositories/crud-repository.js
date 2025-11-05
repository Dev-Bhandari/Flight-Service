const { StatusCodes } = require("http-status-codes");
const { Logger } = require("../config");
const { ApiError } = require("../utils");
class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {        
        const response = await this.model.create(data);
        return response;
    }

    async destroy(id, resource) {
        const response = await this.model.destroy({
            where: {
                id: id,
            },
        });

        if (!response) {
            throw new ApiError(StatusCodes.NOT_FOUND, `${resource} not found`);
        }
        return response;
    }

    async get(data, resource) {
        const response = await this.model.findByPk(data);

        if (!response) {
            throw new ApiError(StatusCodes.NOT_FOUND, `${resource} not found`);
        }
        return response;
    }

    async getAll() {
        const response = await this.model.findAll();
        return response;
    }

    async update(id, data, resource) {
        const response = await this.model.update(data, {
            where: { id: id },
        });

        if (!response[0]) {
            throw new ApiError(StatusCodes.NOT_FOUND, `${resource} not found`);
        }
        return response;
    }
}
module.exports = CrudRepository;
