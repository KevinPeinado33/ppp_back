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
exports.PPPDocumentsEntity = void 0;
const typeorm_1 = require("typeorm");
const ppp_entity_1 = require("./ppp.entity");
const comment_document_entity_1 = require("./comment_document.entity");
let PPPDocumentsEntity = class PPPDocumentsEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PPPDocumentsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'type' }),
    __metadata("design:type", String)
], PPPDocumentsEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], PPPDocumentsEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'url_document', length: 500 }),
    __metadata("design:type", String)
], PPPDocumentsEntity.prototype, "urlDocument", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'date_upload'
    }),
    __metadata("design:type", Date)
], PPPDocumentsEntity.prototype, "dateUpload", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], PPPDocumentsEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ppp_entity_1.PPPEntity, (ppp) => ppp.pppDocuments),
    __metadata("design:type", ppp_entity_1.PPPEntity)
], PPPDocumentsEntity.prototype, "ppp", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_document_entity_1.CommentDocumentEntity, (comments) => comments.pppDocument),
    __metadata("design:type", Array)
], PPPDocumentsEntity.prototype, "comments", void 0);
PPPDocumentsEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'ppp_documents' })
], PPPDocumentsEntity);
exports.PPPDocumentsEntity = PPPDocumentsEntity;
//# sourceMappingURL=ppp-documents.entity.js.map