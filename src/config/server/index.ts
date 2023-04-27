import express, { Application } from 'express'
import cors from 'cors'

import authRouter from '../../modules/auth/presentation/routes/auth.route'
import studentRouter from '../../modules/student/presentation/routers/student.router'
import { dbConnection } from '../database'

export class AppServer {

    private app : Application
    private port: string

    private paths = {
        auth: '/api/auth',
        student: '/api/student'
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
    }

    async dbConnection() {
        try {
            await dbConnection()
            console.log('✅ DataBase is connected.')
        } catch ( error: any ) {
            throw new Error( error )
        }
    }

    routes() {
        this.app.use(this.paths.auth, authRouter)
        this.app.use(this.paths.student, studentRouter)
    }

}
