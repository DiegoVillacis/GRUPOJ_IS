import { Request, Response } from 'express';
import getConnection from '../database';
const db = require('../orm');

class BoxController {

    public async get(req: Request, res: Response) {
        const pool:any = await getConnection();
          await pool.request().execute('sp_GetData', async function (error:any, results:any) {
              if (error) { res.send(error); };
              if (results) { 
                res.send(results.recordset);
            };
          })
    }

    public async post(req: Request, res: Response) {
        const pool:any = await getConnection();
          await pool.request().input('data', JSON.stringify(req.body)).execute('spPostPedidos ', async function (error:any, results:any) {
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

      public async put(req: Request, res: Response) {
        const pool:any = await getConnection();
          await pool.request().input('data', JSON.stringify(req.body)).execute('spPutOrdersAdmin', async function (error:any, results:any) {
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

      public async delete(req: Request, res: Response) {
        const pool:any = await getConnection();
        const { id } = req.params;
           await pool.request().input('id',id).execute('spDeletePedidos', async function (error:any, results:any) {
            if (error) { res.send(error); };
            if (results) { 
              if(results.recordset[0].code==200){
                  res.send({ message:"Eliminado correctamente",data:results.recordset[0]}) 
              }else{
                  res.send({ message:"Error en la operacion",errors:results.recordset}) 
              }  
          };
           })
       }
    
}

const boxesController = new BoxController();
export default boxesController;