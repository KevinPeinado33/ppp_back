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
exports.RolesEntity = void 0;
const typeorm_1 = require("typeorm");
const _1 = require("./");
let RolesEntity = class RolesEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], RolesEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], RolesEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 400 }),
    __metadata("design:type", String)
], RolesEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bool", default: true }),
    __metadata("design:type", Boolean)
], RolesEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.RoleUserEntity, (rolesUser) => rolesUser.role),
    __metadata("design:type", Array)
], RolesEntity.prototype, "rolesUsers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.AccessRoleEntity, (accessRole) => accessRole.access),
    __metadata("design:type", Array)
], RolesEntity.prototype, "accessRoles", void 0);
RolesEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "roles" })
], RolesEntity);
exports.RolesEntity = RolesEntity;
//# sourceMappingURL=roles.entity.js.map