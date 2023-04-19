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
            const pool = yield (0, database_1.default)();
            yield pool.request().execute('sp_GetData', function (error, results) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (error) {
                        res.send(error);
                    }
                    ;
                    if (results) {
                        res.send(results.recordset);
                    }
                    ;
                });
            });
        });
    }
    post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield (0, database_1.default)();
            yield pool.request().input('data', JSON.stringify(req.body)).execute('spPostPedidos ', function (error, results) {
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
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield (0, database_1.default)();
            yield pool.request().input('data', JSON.stringify(req.body)).execute('spPutOrdersAdmin', function (error, results) {
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
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield (0, database_1.default)();
            const { id } = req.params;
            yield pool.request().input('id', id).execute('spDeletePedidos', function (error, results) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (error) {
                        res.send(error);
                    }
                    ;
                    if (results) {
                        if (results.recordset[0].code == 200) {
                            res.send({ message: "Eliminado correctamente", data: results.recordset[0] });
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
}
const boxesController = new BoxController();
exports.default = boxesController;
