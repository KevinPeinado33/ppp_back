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
exports.TypeDocumentEntity = void 0;
const typeorm_1 = require("typeorm");
const plan_document_entity_1 = require("./plan-document.entity");
let TypeDocumentEntity = class TypeDocumentEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TypeDocumentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150 }),
    (0, typeorm_1.Index)({ unique: true }),
    __metadata("design:type", String)
], TypeDocumentEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 300 }),
    __metadata("design:type", String)
], TypeDocumentEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bool', default: true }),
    __metadata("design:type", Boolean)
], TypeDocumentEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => plan_document_entity_1.PlanDocumentEntity, (planDocument) => planDocument.type),
    __metadata("design:type", Array)
], TypeDocumentEntity.prototype, "planDocuments", void 0);
TypeDocumentEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'type_documents' })
], TypeDocumentEntity);
exports.TypeDocumentEntity = TypeDocumentEntity;
//# sourceMappingURL=type-document.entity.js.map