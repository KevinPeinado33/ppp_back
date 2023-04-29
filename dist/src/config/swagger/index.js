"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.PATH_SWAGGER = void 0;
exports.PATH_SWAGGER = '/api-docs';
exports.options = {
    definition: {
        openai: '3.0.0',
        info: {
            title: 'Apis para el PPP de la UPeU',
            version: '1.0.0'
        }
    },
    apis: [
        'src/modules/student/presentation/documentation/student.documentation.ts'
    ]
};
//# sourceMappingURL=index.js.map