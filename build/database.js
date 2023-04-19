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
exports.dbSettings = void 0;
const mssql_1 = __importDefault(require("mssql"));
exports.dbSettings = {
    user: "sa",
    password: "Alexxxander123.***",
    server: "20.125.123.33",
    database: "ED-PRO",
    options: {
        encrypt: true,
        trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
};
const getConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(exports.dbSettings);
        return pool;
    }
    catch (error) {
        console.error(error);
    }
});
exports.default = getConnection;
