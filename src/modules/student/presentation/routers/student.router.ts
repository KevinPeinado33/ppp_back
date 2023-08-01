import { Router } from 'express'

import { StudentController } from '../controllers'
import { validateJWT } from '../../../../common/middlewares/jwt'

const router = Router()

const { 

    getOneByCode,
    getAllStudents,
    getStudentsSemester,
    getStudentsProcessEnd,
    postCreateListStudents
    
    
} = new StudentController()

router.get('/get-by-code', validateJWT, getOneByCode)
router.get('/get-students-by-plan-ppp/:planPPP', validateJWT , getAllStudents)
router.get('/get-students-by-semester/:cycle', validateJWT, getStudentsSemester)
router.get('/get-students-process-or-end/:finalRate', validateJWT, getStudentsProcessEnd)
router.post('/create-list-students', validateJWT, postCreateListStudents)

export default router
