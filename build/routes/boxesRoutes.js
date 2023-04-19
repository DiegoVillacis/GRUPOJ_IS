"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const boxesController_1 = __importDefault(require("../controllers/boxesController"));
class BoxesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        /**
 * @openapi
 * components:
 *   schemas:
 *     Imagenes:
 *       type: object
 *       properties:
 *         urlimagen:
 *           type: string
 *           example: url 1
 */
        /**
 * @openapi
 * components:
 *   schemas:
 *     eliminarImagenes:
 *       type: object
 *       properties:
 *         idimagen:
 *           type: number
 *           example: 1
 */
        /**
 * @openapi
 * components:
 *   schemas:
 *     Cajas:
 *       type: object
 *       properties:
 *         nombreCaja:
 *           type: string
 *           example: caja 1
 *         imagenes:
 *           type: array
 *           items:
 *            $ref: '#/components/schemas/Imagenes'
 *         descripcion:
 *           type: string
 *           example: donas
 *         precio:
 *           type: number
 *           example: 10
 *         cantidad:
 *           type: number
*           example: 5
 */
        /**
 * @openapi
 * components:
 *   schemas:
 *     Cajas1:
 *       type: object
 *       properties:
 *         idCaja:
 *           type: number
 *           example: 5
 *         nombreCaja:
 *           type: string
 *           example: caja 1
 *         imagenes:
 *           type: array
 *           items:
 *            $ref: '#/components/schemas/Imagenes'
 *         eliminarImagenes:
 *           type: array
 *           items:
 *            $ref: '#/components/schemas/eliminarImagenes'
 *         descripcion:
 *           type: string
 *           example: donas
 *         precio:
 *           type: number
 *           example: 10
 *         cantidad:
 *           type: number
*           example: 5
 */
        /**
         * @openapi
         * /api/boxes:
         *   get:
         *     summary: obtiene un json con la informacion de cajas
         *     tags: [Cajas]
         *     responses:
         *       200:
         *         description: json cajas
         */
        this.router.get('/', boxesController_1.default.get);
        /**
         * @openapi
         * /api/boxes:
         *   post:
         *     summary: Inserta registro de cajas
         *     tags: [Cajas]
         *     requestBody:
         *      required: true
         *      content:
         *         application/json:
         *           schema:
         *             $ref: '#/components/schemas/Cajas'
         *     responses:
         *       200:
         *         description: crear cajas
         */
        this.router.post('/', boxesController_1.default.post);
        /**
         * @openapi
         * /api/boxes/{id}:
         *   delete:
         *     summary: elimina el registro de una caja
         *     tags: [Cajas]
         *     parameters:
         *     - in: path
         *       name: id
         *       type: number
         *     responses:
         *       200:
         *         description: json cajas
         */
        this.router.delete('/:id', boxesController_1.default.delete);
        /**
         * @openapi
         * /api/boxes:
         *   put:
         *     summary: Actualiza un registro de cajas
         *     tags: [Cajas]
         *     requestBody:
         *      required: true
         *      content:
         *         application/json:
         *           schema:
         *             $ref: '#/components/schemas/Cajas1'
         *     responses:
         *       200:
         *         description: crear cajas
         */
        this.router.put('/', boxesController_1.default.put);
    }
}
const boxesroutes = new BoxesRoutes();
exports.default = boxesroutes.router;
