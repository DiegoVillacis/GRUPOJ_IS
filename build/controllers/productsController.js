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
class ProductsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield (0, database_1.default)();
            yield pool.request().query("SELECT * FROM TRANSPORTETIPOS", function (error, results) {
                if (error) {
                    res.json(error);
                }
                ;
                if (results) {
                    res.send({ code: 200, data: results.recordset });
                }
                ;
            });
        });
    }
    listbyId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*const { id } = req.params;
            await pool.query('SELECT * FROM productos WHERE idProducto=?', [id], function (error, results) {
                if (error) { res.send(error) };
                if (results) { res.send({ code: 200, data: results }) };
            });*/
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*  await pool.query('INSERT INTO productos set ?', [req.body], async function (error, results, fields) {
                  if (error) { res.send(error); await pool.query('COMMIT') };
                  if (results) { res.send({ code: 200, data: "Guardado correctamente" }); await pool.query('ROLLBACK') };
              })*/
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*   const { id } = req.params;
               await pool.query('DELETE FROM productos WHERE idProducto = ?', [id], async function (error, results, fields) {
                   if (error) { res.send(error); await pool.query('COMMIT') };
                   if (results) { res.send({ code: 200, data: "Eliminado correctamente" }); await pool.query('ROLLBACK') };
               })*/
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*      const { id } = req.params;
                  await pool.query('UPDATE productos set ? WHERE idProducto = ?', [req.body, id], async function (error, results, fields) {
                      if (error) { res.send(error); await pool.query('COMMIT') };
                      if (results) { res.send({ code: 200, data: "Actualizado correctamente" }); await pool.query('ROLLBACK') };
                  })
          */
        });
    }
}
const productController = new ProductsController();
exports.default = productController;
