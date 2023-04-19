import { Request, Response } from 'express';
import getConnection from '../database';
const db = require('../orm');

class BoxController {

    public async get(req: Request, res: Response) {
        db.orders.findAll({
            where: {
                idPedidoEstado: 1
            }
          }).then((orders:any) => {
                    res.send({message:"Consulta realizada",data:orders});
            }).catch(function(error:any){
                return res.status(500).json({ message:"Error en la operacion",errors:error});
            })
    }

    public async put(req: Request, res: Response) {
        const pool:any = await getConnection();
        const { id } = req.params;
        
          await pool.request().input('idpedido', id).execute('spPutFinalizarPedido', async function (error:any, results:any) {
              if (error) { res.send(error); };
              if (results) { 
                if(results.recordset[0].code==200){
                    res.send({ message:"Informacion Actualizada",data:results.recordset[0]}) 
                }else{
                    res.send({ message:"Error en la operacion",errors:results.recordset}) 
                }  
            };
          })
      }

      public async getIdDelivery(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        db.orders.findAll({
            where: {
                idPedidoEstado: 2,
                idDelivery: id
            }
          }).then((orders:any) => {
                    res.send({message:"Consulta realizada",data:orders});
            }).catch(function(error:any){
                return res.status(500).json({ message:"Error en la operacion",errors:error});
            })
    }

    
}

const boxesController = new BoxController();
export default boxesController;