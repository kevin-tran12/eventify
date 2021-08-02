"use strict";
const faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Venues",
      [
        {
          name: faker.lorem.word(),
          city: faker.address.city(),
          capacity: 500,
        },
        {
          name: faker.lorem.word(),
          city: faker.address.city(),
          capacity: 600,
        },
        {
          name: faker.lorem.word(),
          city: faker.address.city(),
          capacity: 300,
        },
        {
          name: faker.lorem.word(),
          city: faker.address.city(),
          capacity: 400,
        },
        {
          name: faker.lorem.word(),
          city: faker.address.city(),
          capacity: 700,
        },
        {
          name: faker.lorem.word(),
          city: faker.address.city(),
          capacity: 500,
        },
        {
          name: faker.lorem.word(),
          city: faker.address.city(),
          capacity: 600,
        },
        {
          name: faker.lorem.word(),
          city: faker.address.city(),
          capacity: 300,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Venues",null,{});
  },
};
