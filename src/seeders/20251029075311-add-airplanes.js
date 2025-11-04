"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert("Airplanes", [
            {
                modelNumber: "airbusa320",
                capacity: 180,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "airbusa380",
                capacity: 500,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "boeing737",
                capacity: 174,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "boeing747",
                capacity: 410,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "boeing777",
                capacity: 368,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "boeing787",
                capacity: 280,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "airbusa350",
                capacity: 325,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "airbusa321",
                capacity: 220,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "embraere190",
                capacity: 100,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "atr72",
                capacity: 72,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete("Airplanes", {});
    },
};
