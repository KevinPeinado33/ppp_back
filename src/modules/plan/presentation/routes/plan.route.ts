import { Router } from 'express'

import { PlanController } from '../controllers'
import { validateJWT } from '../../../../common/middlewares/jwt'

const router = Router()

const {

    getAllPlans,
    postCreatePlan,
    postCreateAreaPlan,
    postCreateQuestionEvaluation,
    postCreateDocument,
    getTypesDocuments,
    getBasesPPP

} = new PlanController()

router.get('/get-all', validateJWT, getAllPlans)
router.post('/create-plan-ppp', validateJWT, postCreatePlan)
router.post('/create-area-plan', validateJWT, postCreateAreaPlan)
router.post('/create-question-evaluation', validateJWT, postCreateQuestionEvaluation)
router.post('/create-document-plan', validateJWT, postCreateDocument)
router.get('/get-all-types-documents', validateJWT, getTypesDocuments)


router.get('/get-bases-ppp', getBasesPPP)

export default router
