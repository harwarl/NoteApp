//importing Sequelize
const { Sequelize } = require('sequelize');

//initializing Sequelize
const sequelize = new Sequelize(
    'noteapp', 
    'root', 
    'Iganmode', 
    {
        'dialect': 'mysql',
        'host': 'localhost'
    });

module.exports = sequelize;