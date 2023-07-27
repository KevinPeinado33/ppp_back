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
exports.RoleUserEntity = void 0;
const typeorm_1 = require("typeorm");
const _1 = require("./");
let RoleUserEntity = class RoleUserEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RoleUserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.RolesEntity, (role) => role.rolesUsers),
    __metadata("design:type", _1.RolesEntity)
], RoleUserEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.UserEntity, (user) => user.roleUser),
    __metadata("design:type", _1.UserEntity)
], RoleUserEntity.prototype, "user", void 0);
RoleUserEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'roles_user' })
], RoleUserEntity);
exports.RoleUserEntity = RoleUserEntity;
//# sourceMappingURL=roles-users.entity.js.map