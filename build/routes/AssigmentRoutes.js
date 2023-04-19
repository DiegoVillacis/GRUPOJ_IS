"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const assigmentController_1 = __importDefault(require("../controllers/assigmentController"));
class BoxesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        /**
 * @openapi
 * /api/assigments:
 *   get:
 *     summary:  Obtiene los pedidos que han sido generadas para poder realizar los envíos
 *     tags: [Asignaciones]
 *     responses:
 *       200:
 *         description: json asignaciones
 */
        this.router.get('/', assigmentController_1.default.get);
        /**
         * @openapi
         * /api/assigments/{idPedido}:
         *   put:
         *     summary: Actualiza el estado del Pedido a Finalizado
         *     tags: [Asignaciones]
         *     parameters:
         *     - in: path
         *       name: idPedido
         *       type: number
         *     responses:
         *       200:
         *         description: actualizar pedido
         */
        this.router.put('/:id', assigmentController_1.default.put);
        /**
         * @openapi
         * /api/assigments/{idDelivery}:
         *   get:
         *     summary: Obtiene los pedidos que estan en Proceso
         *     tags: [Asignaciones]
         *     parameters:
         *     - in: path
         *       name: idDelivery
         *       type: number
         *     responses:
         *       200:
         *         description: actualizar pedido
         */
        this.router.get('/:id', assigmentController_1.default.getIdDelivery);
    }
}
const boxesroutes = new BoxesRoutes();
exports.default = boxesroutes.router;
