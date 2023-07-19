import 'reflect-metadata'
import 'dotenv/config'
import express, { Application } from 'express'
import cors from 'cors'
import swaggerUI from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

import authRouter from '../../modules/auth/presentation/routes/auth.route'
import studentRouter from '../../modules/student/presentation/routers/student.router'
import { AppDataSource } from '../database'
import { PATH_SWAGGER, options } from '../swagger'

export class AppServer {

    private app : Application
    private port: string

    private paths = {
        auth    : '/api/auth',
        student : '/api/student'
    }

    constructor() {
        
        this.app  = express()
        this.port = process.env.PORT || ''

        this.dbConnection()
        this.middlewares()
        this.routes()

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`🏃‍♂️ Server is already on port:${ this.port }.` )
        })
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(
            PATH_SWAGGER,
            swaggerUI.serve,
            swaggerUI.setup(swaggerJSDoc( options ))
        )
        console.log(`📄 Swagger is already on http://localhost:${this.port}${PATH_SWAGGER}`)
    }

    async dbConnection() {
        try {
            await AppDataSource.initialize()
            console.log('✅ DataBase is connected.')
        } catch ( error: any ) {
            console.log(error)
        }
    }

    routes() {
        this.app.use(this.paths.auth, authRouter)
        this.app.use(this.paths.student, studentRouter)
    }

}
