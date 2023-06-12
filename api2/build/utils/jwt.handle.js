"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.generateToken = void 0;
var _jsonwebtoken = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || 'token.01010101';
const generateToken = id => {
  const jwt = (0, _jsonwebtoken.sign)({
    id
  }, JWT_SECRET, {
    expiresIn: '2h'
  });
  return jwt;
};
exports.generateToken = generateToken;
const verifyToken = jwt => {
  const isOk = (0, _jsonwebtoken.verify)(jwt, JWT_SECRET);
  return isOk;
};
exports.verifyToken = verifyToken;