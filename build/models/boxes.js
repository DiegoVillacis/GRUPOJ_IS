'use strict';
module.exports = (sequelize, DataTypes) => {
    const Cajas = sequelize.define('CAJAS', {
        idCaja: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreCaja: { type: DataTypes.STRING },
        descripcion: { type: DataTypes.STRING },
        precio: { type: DataTypes.DECIMAL },
        cantidad: { type: DataTypes.DECIMAL },
    }, {
        timestamps: false,
    });
    return Cajas;
};
