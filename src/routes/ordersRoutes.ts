import { Router } from "express";
import ordersController from "../controllers/ordersController";

class BoxesRoutes{
    router:Router = Router();
    constructor(){
        this.config();
    }

    config():void{


/**
 * @openapi
 * components:
 *   schemas:
 *     PeidoDelivery:
 *       type: object
 *       properties:
 *         idDelivery: 
 *           type: number
 *           example: 1
 *         idPedido: 
 *           type: number
 *           example: 4
 */

        /**
 * @openapi
 * components:
 *   schemas:
 *     CajasPedido:
 *       type: object
 *       properties:
 *         idCaja: 
 *           type: number
 *           example: 11
 *         cantidadCajas: 
 *           type: number
 *           example: 3
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Pedidos:
 *       type: object
 *       properties:
 *         idCliente: 
 *           type: number
 *           example: 1
 *         idPagoTipo: 
 *           type: number
 *           example: 2
 *         idDireccion: 
 *           type: number
 *           example: 1
 *         nombrePedidoRecepcion:
 *           type: string
 *           example: nombre Familiar
 *         celularPedidoRecepcion:
 *           type: string
 *           example: 098523147
 *         callePrimaria:
 *           type: string
 *           example: calle 1
 *         calleSecundaria:
 *           type: string
 *           example: calle 2
 *         referenciaDireccion:
 *           type: string
 *           example: frente al parque
 *         detallePedidos:
 *           type: array
 *           items:
 *            $ref: '#/components/schemas/CajasPedido'
 */

        /**
 * @openapi
 * /api/orders:
 *   get:
 *     summary: El administrador obtiene pedidos que han sido realizados mediante el sitio web
 *     tags: [Pedidos]
 *     responses:
 *       200:
 *         description: json pedidos
 */
    this.router.get('/', ordersController.get)
/**
 * @openapi
 * /api/orders:
 *   post:
 *     summary: Cliente realiza pedidos en la aplicación.(si el cliente envia con el iddireccion nulo se le genera una nueva direccion con los campos ingresados en calle Primaria)
 *     tags: [Pedidos]
 *     requestBody:
 *      required: true
 *      content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pedidos'         
 *     responses:
 *       200:
 *         description: crear pedidos
 */
    this.router.post('/', ordersController.post)
/**
 * @openapi
 * /api/orders/{idPedido}:
 *   delete:
 *     summary: elimina un registro de pedidos antes de que el estado cambio a En Proceso
 *     tags: [Pedidos]
 *     parameters:
 *     - in: path 
 *       name: idPedido
 *       type: number
 *     responses:
 *       200:
 *         description: json pedidos
 */
    this.router.delete('/:id', ordersController.delete )

    /**
 * @openapi
 * /api/orders:
 *   put:
 *     summary: Actualiza el registro de un pedido cuando un delivery va a hacer la entrega
 *     tags: [Pedidos]
 *     requestBody:
 *      required: true
 *      content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PeidoDelivery'        
 *     responses:
 *       200:
 *         description: actualizar pedido
 */

    this.router.put('/', ordersController.put )
    } 

}


const boxesroutes = new BoxesRoutes();
export default boxesroutes.router;