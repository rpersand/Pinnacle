const Sequelize = require('sequelize')
const db = require('../db')

const Gym = db.define('gym', {
  Name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Location: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Gym
