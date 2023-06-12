"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verified = exports.encrypt = void 0;
var _bcryptjs = require("bcryptjs");
const encrypt = async pass => {
  const passwordHash = await (0, _bcryptjs.hash)(pass, 4);
  return passwordHash;
};
exports.encrypt = encrypt;
const verified = async (pass, passHash) => {
  const isCorrect = await (0, _bcryptjs.compare)(pass, passHash);
  return isCorrect;
};
exports.verified = verified;