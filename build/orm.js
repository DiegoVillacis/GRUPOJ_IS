"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const keys_1 = require("./keys");
const sequelize = new Sequelize(keys_1.database.database, keys_1.database.user, keys_1.database.password, {
    host: keys_1.database.server,
    dialect: 'mssql',
});
const db = {};
db.sequelize = sequelize;
//Models/tables
db.cajas = require('./models/boxes')(sequelize, Sequelize);
db.orders = require('./models/orders')(sequelize, Sequelize);
module.exports = db;
