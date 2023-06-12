"use strict";

require("reflect-metadata");
var _app = require("./app");
var _ormconfig = require("./ormconfig");
require('dotenv').config();
const PORT = process.env.PORT || 5002;
async function boostrap() {
  try {
    await _ormconfig.appDataSource.initialize();
    console.log('Database connected!');
    _app.app.listen(PORT, () => {
      console.log('Server running OK!!');
    });
    console.log('Server is listening on port:', PORT);
  } catch (err) {
    console.log(err);
  }
}
boostrap();
function db() {
  throw new Error('Function not implemented.');
}