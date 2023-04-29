export const PATH_SWAGGER = '/api-docs'

export const options = {
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
}
