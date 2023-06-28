"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataSourceConfig = exports.AppDS = void 0;
require("dotenv/config");
var _typeorm = require("typeorm");
var _typeormNamingStrategies = require("typeorm-naming-strategies");
const entitiesPath = __dirname + process.env.POSTGRES_ENTITIES;
const DataSourceConfig = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_ACCOUNT,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  synchronize: true,
  logging: false,
  entities: [entitiesPath],
  namingStrategy: new _typeormNamingStrategies.SnakeNamingStrategy()
};
exports.DataSourceConfig = DataSourceConfig;
const AppDS = new _typeorm.DataSource(DataSourceConfig);
exports.AppDS = AppDS;