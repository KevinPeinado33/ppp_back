import express, { Application } from 'express'
import cors from 'cors'

import authRouter from '../../modules/auth/infrastructure/routes/auth.route'

export class AppServer {

    private app : Application
    private port: string

    private paths = {
        auth: '/api/auth'
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
            console.log('✅ Database is connected.')
        } catch ( error: any ) {
            throw new Error( error )
        }
    }

    routes() {
        this.app.use(this.paths.auth, authRouter)
    }

}
