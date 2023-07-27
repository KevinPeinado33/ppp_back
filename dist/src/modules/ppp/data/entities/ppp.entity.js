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
exports.PPPEntity = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../../../student/data/entities");
const entities_2 = require("../../../plan/data/entities");
const entities_3 = require("../../../auth/data/entities");
const evaluation_entity_1 = require("./evaluation.entity");
let PPPEntity = class PPPEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PPPEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', name: 'intership_hours' }),
    __metadata("design:type", Number)
], PPPEntity.prototype, "intershipHours", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', array: true }),
    __metadata("design:type", String)
], PPPEntity.prototype, "area", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'started_date'
    }),
    __metadata("design:type", Date)
], PPPEntity.prototype, "startedDate", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamptz',
        name: 'finished_date'
    }),
    __metadata("design:type", Date)
], PPPEntity.prototype, "finishedDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], PPPEntity.prototype, "rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bool', default: true }),
    __metadata("design:type", Boolean)
], PPPEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.StudentEntity, (student) => student.ppp),
    __metadata("design:type", entities_1.StudentEntity)
], PPPEntity.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_2.PlanPPPEntity, (plan) => plan.ppp),
    __metadata("design:type", entities_2.PlanPPPEntity)
], PPPEntity.prototype, "plan", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_3.UserEntity, (advisor) => advisor.ppp),
    __metadata("design:type", entities_3.UserEntity)
], PPPEntity.prototype, "advisor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => evaluation_entity_1.EvaluationEntity, (evaluation) => evaluation.ppp),
    __metadata("design:type", Array)
], PPPEntity.prototype, "evaluations", void 0);
PPPEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'ppp' })
], PPPEntity);
exports.PPPEntity = PPPEntity;
//# sourceMappingURL=ppp.entity.js.map