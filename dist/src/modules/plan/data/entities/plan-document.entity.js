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
exports.PlanDocumentEntity = void 0;
const typeorm_1 = require("typeorm");
const _1 = require(".");
let PlanDocumentEntity = exports.PlanDocumentEntity = class PlanDocumentEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PlanDocumentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150 }),
    (0, typeorm_1.Index)({ unique: true }),
    __metadata("design:type", String)
], PlanDocumentEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'url_document', length: 500 }),
    __metadata("design:type", String)
], PlanDocumentEntity.prototype, "urlDocument", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 300 }),
    __metadata("design:type", String)
], PlanDocumentEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bool', default: true }),
    __metadata("design:type", Boolean)
], PlanDocumentEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.TypeDocumentEntity, (type) => type.planDocuments),
    __metadata("design:type", _1.TypeDocumentEntity)
], PlanDocumentEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.PlanPPPEntity, (planPPP) => planPPP.planDocuments),
    __metadata("design:type", _1.PlanPPPEntity)
], PlanDocumentEntity.prototype, "planPPP", void 0);
exports.PlanDocumentEntity = PlanDocumentEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'plan_documents' })
], PlanDocumentEntity);
//# sourceMappingURL=plan-document.entity.js.map