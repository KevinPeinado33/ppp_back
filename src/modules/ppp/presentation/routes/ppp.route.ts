import { Router } from 'express'

import { EvaluationController } from '../controller/evaluation.controller'
import { PPPController } from '../controller/ppp.controller'
import { validateJWT } from '../../../../common/middlewares/jwt'

const route = Router()

const { 

    getEvaluationHistory 

} = new EvaluationController()

const {
    updateAssingAdvisor
} = new PPPController()

route.get('/get-evaluation-by-ppp/:idPPP', validateJWT, getEvaluationHistory)
route.put('/update-assing-advisor-ppp/:idPPP/:advisorID', validateJWT, updateAssingAdvisor)

export default route 