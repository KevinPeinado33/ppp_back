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
exports.ShareEntity = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../../../auth/data/entities");
const notification_entity_1 = require("./notification.entity");
let ShareEntity = exports.ShareEntity = class ShareEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ShareEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.UserEntity, (address) => address.share),
    __metadata("design:type", entities_1.UserEntity)
], ShareEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => notification_entity_1.NotificationsEntity, (notification) => notification.share),
    __metadata("design:type", notification_entity_1.NotificationsEntity)
], ShareEntity.prototype, "notification", void 0);
exports.ShareEntity = ShareEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'share' })
], ShareEntity);
//# sourceMappingURL=share.entity.js.map