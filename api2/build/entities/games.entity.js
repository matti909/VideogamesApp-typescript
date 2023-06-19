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
exports.GamesEntity = void 0;
const typeorm_1 = require("typeorm");
const platform_entity_1 = require("./platform.entity");
const genre_entity_1 = require("./genre.entity");
const base_entity_1 = require("../../src/config/base.entity");
let GamesEntity = class GamesEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], GamesEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], GamesEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], GamesEntity.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'background_image' }),
    __metadata("design:type", String)
], GamesEntity.prototype, "background_image", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GamesEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GamesEntity.prototype, "released", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], GamesEntity.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => platform_entity_1.PlatformEntity),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], GamesEntity.prototype, "platforms", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => genre_entity_1.GenreEntity),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], GamesEntity.prototype, "genres", void 0);
GamesEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'games' })
], GamesEntity);
exports.GamesEntity = GamesEntity;
