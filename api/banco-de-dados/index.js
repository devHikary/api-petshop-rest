const Sequelize = require('sequelize')
require('dotenv/config');

const instancia = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
)

module.exports = instancia
