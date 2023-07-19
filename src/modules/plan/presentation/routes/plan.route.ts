import { Router } from 'express'

import { PlanController } from '../controllers/plan.controller'

const router = Router()

const {

    getAllPlans

} = new PlanController()

router.get('/get-all', getAllPlans)

export default router
