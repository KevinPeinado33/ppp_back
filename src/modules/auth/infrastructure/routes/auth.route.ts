import { Router } from 'express'

import { AuthController } from '../controllers'

const router = Router()

const { 
    postLogin,
    postRegister
} = new AuthController()

router.post('/login', postLogin)
router.post('/register', postRegister)

export default router
