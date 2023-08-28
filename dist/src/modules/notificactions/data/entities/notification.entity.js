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
exports.NotificationsEntity = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../../../auth/data/entities");
const share_entity_1 = require("./share.entity");
let NotificationsEntity = exports.NotificationsEntity = class NotificationsEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], NotificationsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], NotificationsEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], NotificationsEntity.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'created_at',
    }),
    __metadata("design:type", Date)
], NotificationsEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bool', default: true }),
    __metadata("design:type", Boolean)
], NotificationsEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.UserEntity, (property) => property.notifications),
    __metadata("design:type", entities_1.UserEntity)
], NotificationsEntity.prototype, "property", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => share_entity_1.ShareEntity, (share) => share.notification),
    __metadata("design:type", Array)
], NotificationsEntity.prototype, "share", void 0);
exports.NotificationsEntity = NotificationsEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'notifications' })
], NotificationsEntity);
//# sourceMappingURL=notification.entity.js.map