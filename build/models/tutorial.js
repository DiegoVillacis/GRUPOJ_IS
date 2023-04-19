'use strict';
module.exports = (sequelize, DataTypes) => {
    const Cajas = sequelize.define('cajas', {
        idCaja: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    }, {
        timestamps: false,
        primaryKey: false
    });
    return Cajas;
};
