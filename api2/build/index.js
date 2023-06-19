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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = require("./app");
const ormconfig_1 = require("./ormconfig");
require('dotenv').config();
const PORT = process.env.PORT || 5002;
function boostrap() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield ormconfig_1.appDataSource.initialize();
            console.log('Database connected!');
            app_1.app.listen(PORT, () => {
                console.log('Server running OK!!');
            });
            console.log('Server is listening on port:', PORT);
        }
        catch (err) {
            console.log(err);
        }
    });
}
boostrap();
function db() {
    throw new Error('Function not implemented.');
}
