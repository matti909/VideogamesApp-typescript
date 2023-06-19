"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformEntity = void 0;
const typeorm_1 = require("typeorm");
const games_entity_1 = require("./games.entity");
const base_entity_1 = require("../../src/config/base.entity");
let PlatformEntity = class PlatformEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PlatformEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PlatformEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PlatformEntity.prototype, "games_count", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PlatformEntity.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PlatformEntity.prototype, "image_background", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'year_end' }),
    __metadata("design:type", Number)
], PlatformEntity.prototype, "yearEnd", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'year_start' }),
    __metadata("design:type", Number)
], PlatformEntity.prototype, "yearStart", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => games_entity_1.GamesEntity, (game) => game.platforms),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], PlatformEntity.prototype, "games", void 0);
PlatformEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'platforms' })
], PlatformEntity);
exports.PlatformEntity = PlatformEntity;
