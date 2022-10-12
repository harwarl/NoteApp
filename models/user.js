//import sequelize 
const { Sequelize } = require("sequelize");

const sequelize = require('../utils/database');

//creating User Table
const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING
});

module.exports = User;