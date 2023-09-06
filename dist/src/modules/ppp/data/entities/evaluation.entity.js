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
exports.EvaluationEntity = void 0;
const typeorm_1 = require("typeorm");
const ppp_entity_1 = require("./ppp.entity");
const question_answer_entity_1 = require("./question-answer.entity");
let EvaluationEntity = class EvaluationEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EvaluationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'type' }),
    __metadata("design:type", String)
], EvaluationEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], EvaluationEntity.prototype, "score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'observation_advisor' }),
    __metadata("design:type", String)
], EvaluationEntity.prototype, "observationAdvisor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'observation_business_mentor' }),
    __metadata("design:type", String)
], EvaluationEntity.prototype, "observationBusinessMentor", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'created_at',
    }),
    __metadata("design:type", Date)
], EvaluationEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamptz',
        name: 'date_end'
    }),
    __metadata("design:type", Date)
], EvaluationEntity.prototype, "dateEnd", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bool', default: true }),
    __metadata("design:type", Boolean)
], EvaluationEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'directed_to' }),
    __metadata("design:type", String)
], EvaluationEntity.prototype, "directedTo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', name: 'number_attempts' }),
    __metadata("design:type", Number)
], EvaluationEntity.prototype, "numberAttempts", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ppp_entity_1.PPPEntity, (ppp) => ppp.evaluations),
    __metadata("design:type", ppp_entity_1.PPPEntity)
], EvaluationEntity.prototype, "ppp", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => question_answer_entity_1.QuestionAnswerEntity, (question) => question.evaluations),
    __metadata("design:type", Array)
], EvaluationEntity.prototype, "questionAnswer", void 0);
EvaluationEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'evaluation' })
], EvaluationEntity);
exports.EvaluationEntity = EvaluationEntity;
//# sourceMappingURL=evaluation.entity.js.map