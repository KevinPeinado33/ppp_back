import { Router } from 'express'

import { AuthController } from '../controllers'

const router = Router()

const { 
    postLogin,
    postRegister,
    getAllUsers
} = new AuthController()

router.post('/login', postLogin)
router.post('/register', postRegister)
router.get('/kevin-aea', getAllUsers)

export default router
