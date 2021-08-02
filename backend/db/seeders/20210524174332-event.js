"use strict";
const faker = require("faker");


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Events",
      [
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
        {
         name:faker.lorem.word(),
         description:faker.lorem.words(),
         date: faker.date.future(),
         categoryId: Math.floor(Math.random() *6)+1,
         venueId: Math.floor(Math.random() *7)+1
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Events",);
  },
};
