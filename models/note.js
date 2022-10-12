//import sequelize 
const { Sequelize } = require("sequelize");

const sequelize = require('../utils/database');

//creating Note Table
const Note = sequelize.define('note', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: Sequelize.STRING,
    note: Sequelize.STRING
})

module.exports = Note;