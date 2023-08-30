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
exports.StudentEntity = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../../../ppp/data/entities");
const entities_2 = require("../../../auth/data/entities");
let StudentEntity = class StudentEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar' }),
    __metadata("design:type", String)
], StudentEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], StudentEntity.prototype, "cycle", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', name: 'intership_hours' }),
    __metadata("design:type", Number)
], StudentEntity.prototype, "intershipHours", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'name_cv' }),
    __metadata("design:type", String)
], StudentEntity.prototype, "nameCv", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'url_cv' }),
    __metadata("design:type", String)
], StudentEntity.prototype, "urlCv", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', name: 'final_rate', nullable: true }),
    __metadata("design:type", Number)
], StudentEntity.prototype, "finalRate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'plan_ppp', nullable: true }),
    __metadata("design:type", String)
], StudentEntity.prototype, "planPPP", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.PPPEntity, (ppp) => ppp.student),
    __metadata("design:type", Array)
], StudentEntity.prototype, "ppp", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => entities_2.UserEntity, (user) => user.student),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", entities_2.UserEntity)
], StudentEntity.prototype, "user", void 0);
StudentEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'students' })
], StudentEntity);
exports.StudentEntity = StudentEntity;
//# sourceMappingURL=student.entity.js.map