import {Request, Response} from 'express';

class IndexController{
    index(req: Request, res: Response){
        res.send("Ejecutado correctamente")
    } 
}

export const indexController = new IndexController();