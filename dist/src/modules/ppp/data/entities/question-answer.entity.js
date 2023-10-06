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
exports.QuestionAnswerEntity = void 0;
const typeorm_1 = require("typeorm");
const evaluation_entity_1 = require("./evaluation.entity");
let QuestionAnswerEntity = class QuestionAnswerEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], QuestionAnswerEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], QuestionAnswerEntity.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], QuestionAnswerEntity.prototype, "answer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', nullable: true }),
    __metadata("design:type", Number)
], QuestionAnswerEntity.prototype, "puntuation", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => evaluation_entity_1.EvaluationEntity, (evaluation) => evaluation.questionAnswer),
    __metadata("design:type", evaluation_entity_1.EvaluationEntity)
], QuestionAnswerEntity.prototype, "evaluations", void 0);
QuestionAnswerEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'question_answer' })
], QuestionAnswerEntity);
exports.QuestionAnswerEntity = QuestionAnswerEntity;
//# sourceMappingURL=question-answer.entity.js.map