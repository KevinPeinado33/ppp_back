import { Router } from 'express'

import { PlanController } from '../controllers'

const router = Router()

const {

    getAllPlans,
    postCreatePlan,
    postCreateAreaPlan,
    postCreateQuestionEvaluation,
    postCreateDocument,
    getTypesDocuments

} = new PlanController()

router.get('/get-all', getAllPlans)
router.post('/create-plan-ppp', postCreatePlan)
router.post('/create-area-plan', postCreateAreaPlan)
router.post('/create-question-evaluation', postCreateQuestionEvaluation)
router.post('/create-document-plan', postCreateDocument)
router.get('/get-all-types-documents', getTypesDocuments)

export default router
