'use strict';
module.exports = (sequelize, DataTypes) => {
    const Pedidos = sequelize.define('PEDIDOS', {
        idPedido: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idDelivery: { type: DataTypes.DECIMAL, },
        idPedidoEstado: { type: DataTypes.DECIMAL, }
    }, {
        timestamps: false,
    });
    return Pedidos;
};
