import { Router } from "express";
import {indexController} from '../controllers/indexController'

class IndexRoutes{
    router:Router = Router();
    constructor(){
        this.config();
    }

    config():void{
    this.router.get('/',indexController.index )
    } 

}


const indexroute = new IndexRoutes();
export default indexroute.router;