import { Router } from "express";
import assigmentController from "../controllers/assigmentController";

class BoxesRoutes{
    router:Router = Router();
    constructor(){
        this.config();
    }

    config():void{


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
    this.router.get('/', assigmentController.get)
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
    this.router.put('/:id', assigmentController.put )

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

    this.router.get('/:id', assigmentController.getIdDelivery)
} 

}


const boxesroutes = new BoxesRoutes();
export default boxesroutes.router;