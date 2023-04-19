const Sequelize = require('sequelize');
  import {database} from './keys';

const sequelize = new Sequelize(database.database,database.user, database.password, {
    host: database.server,
    dialect: 'mssql',
  })

const db:any = {};

db.sequelize = sequelize;

//Models/tables
db.cajas = require('./models/boxes')(sequelize, Sequelize);
db.orders = require('./models/orders')(sequelize, Sequelize);

module.exports = db;