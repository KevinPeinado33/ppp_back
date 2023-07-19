import { Request, Response } from 'express'

import { PlanRepository } from '../../domain/repositories'
import { PlanRepositoryImpl } from '../../data/repositories'
import { FindAllUseCase } from '../../domain/use-cases'

export class PlanController {

    private planRepository: PlanRepository

    constructor() {
        
        this.planRepository = new PlanRepositoryImpl()

        this.getAllPlans = this.getAllPlans.bind( this )

    }

    getAllPlans(req: Request, res: Response) {

        const usecase = new FindAllUseCase(
            res,
            this.planRepository
        )

        usecase.exceute()

    }

}