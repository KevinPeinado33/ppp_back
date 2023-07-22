import { Router } from 'express'

import { StudentController } from '../controllers'
import { validateJWT } from '../../../../common/middlewares/jwt'

const router = Router()

const { 
    postCreate,
    getOneByCode,
    getAll
} = new StudentController()

router.post('/create', validateJWT, postCreate)
router.get('/get-by-code', validateJWT, getOneByCode)
router.get('/get-all', validateJWT, getAll)

export default router
