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
exports.PlanPPPEntity = void 0;
const typeorm_1 = require("typeorm");
const _1 = require("./");
const entities_1 = require("../../../ppp/data/entities");
let PlanPPPEntity = exports.PlanPPPEntity = class PlanPPPEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PlanPPPEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150 }),
    (0, typeorm_1.Index)({ unique: true }),
    __metadata("design:type", String)
], PlanPPPEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', name: 'intership_hours' }),
    __metadata("design:type", Number)
], PlanPPPEntity.prototype, "intershipHours", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'start_date'
    }),
    __metadata("design:type", Date)
], PlanPPPEntity.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamptz',
        name: 'end_date'
    }),
    __metadata("design:type", Date)
], PlanPPPEntity.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', name: 'banner_url', array: true }),
    __metadata("design:type", Array)
], PlanPPPEntity.prototype, "bannerUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bool', default: true }),
    __metadata("design:type", Boolean)
], PlanPPPEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    (0, typeorm_1.JoinColumn)({ name: 'commited' }),
    __metadata("design:type", String)
], PlanPPPEntity.prototype, "commited", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.AreaPlanEntity, (areaPlan) => areaPlan.plan),
    __metadata("design:type", Array)
], PlanPPPEntity.prototype, "areaPlans", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.PlanDocumentEntity, (planDocument) => planDocument.planPPP),
    __metadata("design:type", Array)
], PlanPPPEntity.prototype, "planDocuments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.PPPEntity, (ppp) => ppp.plan),
    __metadata("design:type", Array)
], PlanPPPEntity.prototype, "ppp", void 0);
exports.PlanPPPEntity = PlanPPPEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'plan_ppp' })
], PlanPPPEntity);
//# sourceMappingURL=plan-ppp.entity.js.map