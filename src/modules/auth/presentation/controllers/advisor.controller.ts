import { Request, Response } from 'express'

import { UserRepository } from '../../domain/repositories'
import { UserRepositoryImpl } from '../../data/repositories'

export class AdvisorController{

  private userRepository: UserRepository

  constructor() {

    this.userRepository = new UserRepositoryImpl()

    

  }
}