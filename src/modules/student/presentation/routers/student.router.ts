import { Router } from 'express'

import { StudentController } from '../controllers'
import { validateJWT } from '../../../../common/middlewares/jwt'

const router = Router()

const { 

    getOneByCode,
    getAllStudents
    
} = new StudentController()

router.get('/get-by-code', validateJWT, getOneByCode)
router.get('/get-students-by-plan-ppp/:planPPP', validateJWT , getAllStudents)

export default router
