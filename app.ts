import dotenv from 'dotenv'

import { AppServer } from './src/config/server'

dotenv.config()

const server = new AppServer()
server.listen()


