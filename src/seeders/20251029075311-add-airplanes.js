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
                modelNumber: "Airbus A320",
                capacity: 180,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "Airbus A380",
                capacity: 500,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "Boeing 737",
                capacity: 174,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "Boeing 747",
                capacity: 410,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "Boeing 777",
                capacity: 368,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "Boeing 787",
                capacity: 280,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "Airbus A350",
                capacity: 325,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "Airbus A321",
                capacity: 220,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "Embraer E190",
                capacity: 100,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "ATR 72",
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
        await queryInterface.bulkDelete("Airplanes",{}) 
    },
};
