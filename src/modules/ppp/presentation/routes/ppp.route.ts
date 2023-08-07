import { Router } from 'express'

import { EvaluationController } from '../controller/evaluation.controller'
import { PPPController, PPPDocumentController } from '../controller'
import { validateJWT } from '../../../../common/middlewares/jwt'


const route = Router()

const { 

    getEvaluationHistory,
    getResultSatisfaction,
    getDocumentsPPP,
} = new EvaluationController()

const {
    updateAssingAdvisor,
    postcompanyPPP
} = new PPPController()

const {
    postCreatePPPDocument, 
} = new PPPDocumentController()

route.get('/get-evaluation-by-ppp/:idPPP', validateJWT, getEvaluationHistory)
route.put('/update-assing-advisor-ppp/:idPPP/:advisorID', validateJWT, updateAssingAdvisor)

route.get('/get-result-evaluation/:idEvaluation', validateJWT, getResultSatisfaction)

route.get('/get-documents-ppp/:idPPP',  validateJWT,getDocumentsPPP)

route.post('/create-company-ppp', validateJWT, postcompanyPPP)
route.post('/create-ppp-document', validateJWT ,postCreatePPPDocument)

export default route 