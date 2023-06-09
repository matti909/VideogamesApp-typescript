"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Games = void 0;
var _typeorm = require("typeorm");
var _platform = require("./platform.entity");
var _genre = require("./genre.entity");
var _base = require("./../config/base.entity");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
let Games = (_dec = (0, _typeorm.Entity)({
  name: 'games'
}), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)(), _dec3 = (0, _typeorm.Column)({
  name: 'name',
  type: 'varchar'
}), _dec4 = (0, _typeorm.Column)({
  name: 'background_image',
  type: 'varchar'
}), _dec5 = (0, _typeorm.Column)({
  name: 'description',
  type: 'text'
}), _dec6 = (0, _typeorm.Column)({
  name: 'released',
  type: 'varchar'
}), _dec7 = (0, _typeorm.Column)({
  name: 'rating',
  type: 'float'
}), _dec8 = (0, _typeorm.ManyToMany)(() => _platform.PlatformEntity), _dec9 = (0, _typeorm.JoinTable)(), _dec10 = (0, _typeorm.ManyToMany)(() => _genre.Genre), _dec11 = (0, _typeorm.JoinTable)(), _dec(_class = (_class2 = class Games extends _base.BaseEntity {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "id", _descriptor, this);
    _initializerDefineProperty(this, "name", _descriptor2, this);
    _initializerDefineProperty(this, "background_image", _descriptor3, this);
    _initializerDefineProperty(this, "description", _descriptor4, this);
    _initializerDefineProperty(this, "released", _descriptor5, this);
    _initializerDefineProperty(this, "rating", _descriptor6, this);
    _initializerDefineProperty(this, "platforms", _descriptor7, this);
    _initializerDefineProperty(this, "genres", _descriptor8, this);
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "background_image", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "description", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "released", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "rating", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "platforms", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "genres", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.Games = Games;