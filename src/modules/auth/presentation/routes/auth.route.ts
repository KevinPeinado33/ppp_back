import { Router } from 'express'

import { AuthController } from '../controllers'

const router = Router()

const { 
    
    postLogin,

} = new AuthController()

router.post('/sign-in', postLogin)

export default router
