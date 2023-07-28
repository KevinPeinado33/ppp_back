import { Router } from 'express'

import { EvaluationController } from '../controller/evaluation.controller'
import { PPPController } from '../controller/ppp.controller'


const route = Router()

const { 

    getEvaluationHistory,
    getResultSatisfaction,
    getDocumentsPPP


} = new EvaluationController()

const {
    updateAssingAdvisor
} = new PPPController()

route.get('/get-evaluation-by-ppp/:idPPP', getEvaluationHistory)
route.put('/update-assing-advisor-ppp/:idPPP/:advisorID',updateAssingAdvisor)

route.get('/get-result-satisfaction/:idEvaluation', getResultSatisfaction)

route.get('/get-documents-ppp/:idPPP', getDocumentsPPP)

export default route 