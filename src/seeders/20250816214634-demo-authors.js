'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Authors', [
      { name: 'Haruki Murakami', createdAt: new Date(), updatedAt: new Date() },
      { name: 'George Orwell', createdAt: new Date(), updatedAt: new Date() }
    ]);

    const authors = await queryInterface.sequelize.query(`SELECT id FROM "Authors";`);
    const authorRows = authors[0];

    await queryInterface.bulkInsert('Books', [
      { title: 'Kafka on the Shore', authorId: authorRows[0].id, createdAt: new Date(), updatedAt: new Date() },
      { title: '1Q84', authorId: authorRows[0].id, createdAt: new Date(), updatedAt: new Date() },
      { title: '1984', authorId: authorRows[1].id, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
    await queryInterface.bulkDelete('Authors', null, {});
  }
};
