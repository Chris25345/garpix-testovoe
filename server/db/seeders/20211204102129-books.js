'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [{
      title: 'Matilda',
      author_id: '1',
      year: '2000',
      image: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Fantastic Mr Fox',
      author_id: '1',
      year: '2000',
      image: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Robot Of Silver',
      author_id: '1',
      year: '2000',
      image: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Officer Of The Light',
      author_id: '2',
      year: '2000',
      image: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Kings Of The Day',
      author_id: '2',
      year: '2000',
      image: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Faction Of Perfection',
      author_id: '2',
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
