import { Router } from 'express'
import { StudentController } from '../controllers'

const router = Router()

const { 
    postCreate,
    getOneByCode
} = new StudentController()

router.post('/create', postCreate)
router.get('/get-by-code', getOneByCode)

export default router
