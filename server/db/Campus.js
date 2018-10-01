const db = require('./database');
const Sequelize = require('sequelize');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/img/defaultCampus.jpg',
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
  shortDescription: {
    type: Sequelize.VIRTUAL,
    get() {
      return `${this.getDataValue('description').slice(0, 80)}...`;
    },
  },
});

module.exports = Campus;
