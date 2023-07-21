"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.PATH_SWAGGER = void 0;
exports.PATH_SWAGGER = '/api-docs';
exports.options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Apis para el PPP de la UPeU',
            version: '1.0.0',
            description: 'Leer bien las documentacion de los servicios para que no estar proguntando por las eggs'
        }
    },
    apis: [
        'src/modules/student/presentation/documentation/student.documentation.ts',
        'src/modules/plan/presentation/documentation/plan.documentation.ts'
    ]
};
//# sourceMappingURL=index.js.map