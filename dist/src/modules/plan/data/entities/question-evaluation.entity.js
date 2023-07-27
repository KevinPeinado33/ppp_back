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
exports.QuestionEvaluationEntity = void 0;
const typeorm_1 = require("typeorm");
const _1 = require("./");
let QuestionEvaluationEntity = class QuestionEvaluationEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], QuestionEvaluationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    (0, typeorm_1.Index)({ unique: true }),
    __metadata("design:type", String)
], QuestionEvaluationEntity.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bool' }),
    __metadata("design:type", Boolean)
], QuestionEvaluationEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], QuestionEvaluationEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.AreaPlanEntity, (area) => area.questionEvaluations),
    __metadata("design:type", _1.AreaPlanEntity)
], QuestionEvaluationEntity.prototype, "area", void 0);
QuestionEvaluationEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'question-evaluations' })
], QuestionEvaluationEntity);
exports.QuestionEvaluationEntity = QuestionEvaluationEntity;
//# sourceMappingURL=question-evaluation.entity.js.map