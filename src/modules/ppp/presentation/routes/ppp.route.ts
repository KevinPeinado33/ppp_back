import { Router } from 'express'

import { EvaluationController, PPPController, PPPDocumentController } from '../controller'
import { validateJWT } from '../../../../common/middlewares/jwt'


const route = Router()

const { 

    getEvaluationHistory,
    getResultSatisfaction,
    getDocumentsPPP,
    postCreateEvaluation,
    postCreateQuestionAnswer
} = new EvaluationController()

const {
    updateAssingAdvisor,
    postcompanyPPP,
    updateIntershipHours,
    updateRegisterLetterAceptance,
    updateClosePpp
} = new PPPController()

const {
    postCreatePPPDocument, 
    postInsertCommentDocument
} = new PPPDocumentController()

route.get('/get-evaluation-by-ppp/:idPPP', validateJWT, getEvaluationHistory)
route.put('/update-assing-advisor-ppp/:idPPP/:advisorID', validateJWT, updateAssingAdvisor)

route.get('/get-result-evaluation/:idEvaluation', validateJWT, getResultSatisfaction)

route.get('/get-documents-ppp/:idPPP',  validateJWT,getDocumentsPPP)

route.post('/create-company-ppp', validateJWT, postcompanyPPP)
route.post('/create-ppp-document', validateJWT, postCreatePPPDocument)
route.put('/update-intership-hours', validateJWT , updateIntershipHours)
route.put('/update-register-letter-aceptance/:id', validateJWT, updateRegisterLetterAceptance)
route.put("/update-close-ppp/:id", validateJWT, updateClosePpp)

route.post('/create-evaluation', validateJWT, postCreateEvaluation)
route.post('/create-question-answer', validateJWT, postCreateQuestionAnswer)
route.post('/insert-comment-document/:idDocumentPPP', validateJWT, postInsertCommentDocument)


export default route 