"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appDataSource = void 0;
require("dotenv/config");
var _typeorm = require("typeorm");
const entitiesPath = __dirname + process.env.PG_ENTITIES;
const appDataSource = new _typeorm.DataSource({
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
exports.appDataSource = appDataSource;