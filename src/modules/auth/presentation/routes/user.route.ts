import { Router } from 'express'

import { validateJWT } from '../../../../common/middlewares/jwt'
import { UserController } from '../controllers'

const router = Router()

const { 
    
    postRegister,
    getAllUsers

} = new UserController()

router.post('/register', validateJWT, postRegister)
router.get('/get-all', validateJWT, getAllUsers)

export default router
