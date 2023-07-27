import { Router } from 'express'

import { EvaluationController } from '../controller/evaluation.controller'

const route = Router()

const { 

    getEvaluationHistory 

} = new EvaluationController()

route.get('/get-evaluation-by-ppp/:idPPP', getEvaluationHistory)

export default route 