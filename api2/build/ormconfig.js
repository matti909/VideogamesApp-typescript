"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appDataSource = void 0;
require("dotenv/config");
const typeorm_1 = require("typeorm");
const entitiesPath = __dirname + process.env.PG_ENTITIES;
exports.appDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.PG_HOST,
    port: 5432,
    username: process.env.PG_ACCOUNT,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    synchronize: true,
    logging: false,
    entities: [entitiesPath]
});
