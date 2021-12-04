'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [{
      title: 'Matilda',
      AuthorId: '1',
      year: '2000',
      image: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Fantastic Mr Fox',
      AuthorId: '1',
      year: '2000',
      image: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Robot Of Silver',
      AuthorId: '1',
      year: '2000',
      image: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Officer Of The Light',
      AuthorId: '2',
      year: '2000',
      image: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Kings Of The Day',
      AuthorId: '2',
      year: '2000',
      image: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Faction Of Perfection',
      AuthorId: '2',
      year: '2000',
      image: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {});
  }
};
