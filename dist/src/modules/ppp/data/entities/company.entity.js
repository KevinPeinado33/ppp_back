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
exports.CompanyEntity = void 0;
const typeorm_1 = require("typeorm");
const ppp_entity_1 = require("./ppp.entity");
let CompanyEntity = exports.CompanyEntity = class CompanyEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CompanyEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 250 }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "area", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30 }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "ruc", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 300 }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 250 }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "bussinessMentor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 8 }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "dniMentor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 9 }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "cellphoneMentor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "emailMentor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "academicDegreeMentor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bool', default: true }),
    __metadata("design:type", Boolean)
], CompanyEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => ppp_entity_1.PPPEntity, (ppp) => ppp.company),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", ppp_entity_1.PPPEntity)
], CompanyEntity.prototype, "ppp", void 0);
exports.CompanyEntity = CompanyEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'companies' })
], CompanyEntity);
//# sourceMappingURL=company.entity.js.map