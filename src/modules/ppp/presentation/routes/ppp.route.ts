import { Router } from 'express'

import { EvaluationController } from '../controller/evaluation.controller'
import { PPPController } from '../controller/ppp.controller'

const route = Router()

const { 

    getEvaluationHistory 

} = new EvaluationController()

const {
    updateAssingAdvisor
} = new PPPController()

route.get('/get-evaluation-by-ppp/:idPPP', getEvaluationHistory)
route.put('/update-assing-advisor-ppp/:idPPP/:advisorID',updateAssingAdvisor)

export default route 