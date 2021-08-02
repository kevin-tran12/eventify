"use strict";
const faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
         genre:faker.music.genre()
        },
        {
         genre:faker.music.genre()
        },
        {
         genre:faker.music.genre()
        },
        {
         genre:faker.music.genre()
        },
        {
         genre:faker.music.genre()
        },
        {
         genre:faker.music.genre()
        },
        {
         genre:faker.music.genre()
        },
        {
         genre:faker.music.genre()
        },
        {
         genre:faker.music.genre()
        },

      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories",null,{});
  },
};
