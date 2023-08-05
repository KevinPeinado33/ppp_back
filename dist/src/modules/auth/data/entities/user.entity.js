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
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../../../plan/data/entities");
const entities_2 = require("../../../ppp/data/entities");
const entities_3 = require("../../../student/data/entities");
const _1 = require("./");
let UserEntity = exports.UserEntity = class UserEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', unique: true, name: 'user_name' }),
    __metadata("design:type", String)
], UserEntity.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'first_name' }),
    __metadata("design:type", String)
], UserEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'last_name' }),
    __metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], UserEntity.prototype, "cellphone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], UserEntity.prototype, "area", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', name: 'num_students', default: 0 }),
    __metadata("design:type", Number)
], UserEntity.prototype, "numStudents", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'url_profile' }),
    __metadata("design:type", String)
], UserEntity.prototype, "urlProfile", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.RoleUserEntity, (rolesUser) => rolesUser.role),
    __metadata("design:type", Array)
], UserEntity.prototype, "roleUser", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.PlanPPPEntity, (planPPP) => planPPP.commited),
    __metadata("design:type", Array)
], UserEntity.prototype, "planPPPs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_2.PPPEntity, (ppp) => ppp.advisor),
    __metadata("design:type", Array)
], UserEntity.prototype, "ppp", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => entities_3.StudentEntity, (student) => student.user),
    __metadata("design:type", entities_3.StudentEntity)
], UserEntity.prototype, "student", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'users' })
], UserEntity);
//# sourceMappingURL=user.entity.js.map