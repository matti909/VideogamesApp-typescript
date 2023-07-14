"use strict";

require("reflect-metadata");
var _app = require("./app");
var _ormconfig = require("./config/ormconfig");
require('dotenv').config();
const PORT = 4002;
async function boostrap() {
  try {
    await _ormconfig.AppDS.initialize();
    console.log('Database connected on port:!', process.env.P);
    _app.app.listen(PORT, () => {
      console.log('Server running OK!!');
    });
    console.log('Server is listening on port:', PORT);
  } catch (err) {
    console.log(err);
  }
}
boostrap();