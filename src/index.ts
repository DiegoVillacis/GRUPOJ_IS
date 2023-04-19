import express, { Application } from "express";
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import boxesRoutes from './routes/boxesRoutes';
import ordersRoutes from "./routes/ordersRoutes";
import AssigmentRoutes from "./routes/AssigmentRoutes";
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const path = require("path")

const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Apollo API", 
            version: "1.0.0",
        },
        servers: [
            {
                url: "https://olive-zebra-tie.cyclic.app",
            },
        ],
    },
    apis:[`${path.join(__dirname, "./routes/*.js")}`],
}
class Server {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void {
        this.app.set('port', process.env.PORT || 3000)
        this.app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerSpec)));
        this.app.use(morgan('dev')) //para ver las peticiones que se estan realizando
        this.app.use(cors()) //angular pide los datos al servidor
        this.app.use(express.json()) //aceptar formatos json desde angular
        this.app.use(express.urlencoded()) //validar los datos https
        
    }
    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/boxes', boxesRoutes);
        this.app.use('/api/orders', ordersRoutes);
        this.app.use('/api/assigments', AssigmentRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log("Serivor en el puerto" + this.app.get('port'));
        })
    }

}

const server = new Server();

server.start();


