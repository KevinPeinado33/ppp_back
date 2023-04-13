import { Request, Response } from 'express'

import { LoginUseCase } from '../../app/usecases'
import { LoginDto } from '../../app/dtos'

export class AuthController {
 
    constructor() { }

    postLogin(req: Request, res: Response) {

        const loginDto = req.body as LoginDto
        const usecase  = new LoginUseCase()

        usecase.execute()

    }

    postRegister(req: Request, res: Response) { }

}
