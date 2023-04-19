"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const boxesRoutes_1 = __importDefault(require("./routes/boxesRoutes"));
const ordersRoutes_1 = __importDefault(require("./routes/ordersRoutes"));
const AssigmentRoutes_1 = __importDefault(require("./routes/AssigmentRoutes"));
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const path = require("path");
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
    apis: [`${path.join(__dirname, "./routes/*.js")}`],
};
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerSpec)));
        this.app.use((0, morgan_1.default)('dev')); //para ver las peticiones que se estan realizando
        this.app.use((0, cors_1.default)()); //angular pide los datos al servidor
        this.app.use(express_1.default.json()); //aceptar formatos json desde angular
        this.app.use(express_1.default.urlencoded()); //validar los datos https
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/boxes', boxesRoutes_1.default);
        this.app.use('/api/orders', ordersRoutes_1.default);
        this.app.use('/api/assigments', AssigmentRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Serivor en el puerto" + this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
