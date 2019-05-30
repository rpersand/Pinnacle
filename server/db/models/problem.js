const Sequelize = require('sequelize')
const db = require('../db')

const Problem = db.define('problem', {
  Type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Level: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Value: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  Date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  Description: {
    type: Sequelize.TEXT
  }
})

module.exports = Problem
