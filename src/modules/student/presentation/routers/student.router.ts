import { Router } from 'express'

import { StudentController } from '../controllers'
import { validateJWT } from '../../../../common/middlewares/jwt'

const router = Router()

const { 

    getStudentByCode,
    getAllStudents,
    getStudentsSemester,
    getStudentsProcessEnd,
    postCreateListStudents,
    postCreateStudent
        
} = new StudentController()

router.get('/get-by-code/:codeStudent', validateJWT, getStudentByCode)
router.get('/get-students-by-plan-ppp/:planPPP', validateJWT , getAllStudents)
router.get('/get-students-by-semester/:cycle', validateJWT, getStudentsSemester)
router.get('/get-students-process-or-end/:finalRate', validateJWT, getStudentsProcessEnd)
router.post('/create-list-students', validateJWT, postCreateListStudents)
router.post('/create-student', validateJWT, postCreateStudent)

export default router
