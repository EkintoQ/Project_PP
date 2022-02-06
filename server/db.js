 const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, //DataBase name
    process.env.DB_USER, //DataBase user
    process.env.DB_PASSWORD, //DataBase password
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)