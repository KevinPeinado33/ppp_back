export const PATH_SWAGGER = '/api-docs'

export const options = {
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
        'src/modules/plan/presentation/documentation/plan.documentation.ts',
        'src/modules/auth/presentation/documentation/auth.documentation.ts'
    ]
}
