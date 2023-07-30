import { Router } from 'express'

import { validateJWT } from '../../../../common/middlewares/jwt'
import { UserController } from '../controllers'

const router = Router()

const { 
    
    postRegister,
    getAllUsers,
    getUsersByRol

} = new UserController()

router.post('/register', validateJWT, postRegister)
router.get('/get-all', validateJWT, getAllUsers)
router.get('/get-users-by-rol/:rolSearch', getUsersByRol)

export default router
