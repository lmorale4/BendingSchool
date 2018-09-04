const db = require('./database');
const Sequelize = require('sequelize');

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  fullName: {
    type: Sequelize.VIRTUAL,
    get() {
      return `${this.getDataValue('firstName')} ${this.getDataValue(
        'lastName'
      )}`;
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/img/defaultStudent.png',
  },
  bending: {
    type: Sequelize.ENUM('Water', 'Earth', 'Fire', 'Air', 'Avatar'),
  },
  gpa: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 40,
    },
    get() {
      return this.getDataValue('gpa') / 10;
    },
  },
});

module.exports = Student;
