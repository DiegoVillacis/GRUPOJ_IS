"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const db = require('../orm');
class BoxController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            db.orders.findAll({
                where: {
                    idPedidoEstado: 1
                }
            }).then((orders) => {
                res.send({ message: "Consulta realizada", data: orders });
            }).catch(function (error) {
                return res.status(500).json({ message: "Error en la operacion", errors: error });
            });
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield (0, database_1.default)();
            const { id } = req.params;
            yield pool.request().input('idpedido', id).execute('spPutFinalizarPedido', function (error, results) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (error) {
                        res.send(error);
                    }
                    ;
                    if (results) {
                        if (results.recordset[0].code == 200) {
                            res.send({ message: "Informacion Actualizada", data: results.recordset[0] });
                        }
                        else {
                            res.send({ message: "Error en la operacion", errors: results.recordset });
                        }
                    }
                    ;
                });
            });
        });
    }
    getIdDelivery(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            db.orders.findAll({
                where: {
                    idPedidoEstado: 2,
                    idDelivery: id
                }
            }).then((orders) => {
                res.send({ message: "Consulta realizada", data: orders });
            }).catch(function (error) {
                return res.status(500).json({ message: "Error en la operacion", errors: error });
            });
        });
    }
}
const boxesController = new BoxController();
exports.default = boxesController;
