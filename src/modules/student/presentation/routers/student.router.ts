import { Router } from 'express'
import { StudentController } from '../controllers'

const router = Router()

const { 
    postCreate,
    getOneByCode,
    getAll
} = new StudentController()

router.post('/create', postCreate)
router.get('/get-by-code', getOneByCode)
router.get('/get-all', getAll)

export default router
