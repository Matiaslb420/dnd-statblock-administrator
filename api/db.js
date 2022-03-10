const Sequelize = require("sequelize")
const db = new Sequelize('dnd_page', null, null, {
    host:'localhost',
    dialect:'postgres',
    logging:false
})
module.exports = db;