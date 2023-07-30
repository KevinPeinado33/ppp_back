import { Router } from 'express'

import { EvaluationController } from '../controller/evaluation.controller'


const route = Router()

const { 

    getEvaluationHistory,
    getResultSatisfaction,
    getDocumentsPPP


} = new EvaluationController()

route.get('/get-evaluation-by-ppp/:idPPP', getEvaluationHistory)

route.get('/get-result-satisfaction/:idEvaluation', getResultSatisfaction)

route.get('/get-documents-ppp/:idPPP', getDocumentsPPP)

export default route 