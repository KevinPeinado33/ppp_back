import { Response } from 'express';
import { CompanyRepositroy, EvaluationRepository, PPPDocumentsRepository, PPPRepository } from '../repositories';
import { message } from '../../../../common/responses/msg.response';
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok';
import { UserRepository } from '../../../auth/domain/repositories';

export class ViewStudentProfileUseCase{

  constructor(
    private readonly response: Response,
    private readonly companyRepo: CompanyRepositroy,
    private readonly documentsRepos: PPPDocumentsRepository ,
    private readonly userRepos: UserRepository,
    private readonly evaluationRepos: EvaluationRepository,
    private readonly idPPP: string
    
  ){}

  async execute(){

    try {
      
      // TODO: traer la empresa para la cual trabaja
      const companiesFound = await this.companyRepo.getCompaniesByidPPP( this.idPPP )

      // TODO: traer los documentos regstrados en el ppp
      const documentsFound = await this.documentsRepos.getDocumentsByPPP( this.idPPP )

      // TOOO: traer sus supervior econtrado
      const advisorFound = await this.userRepos.findByIdPPP( this.idPPP )

      // TODO: traer las evaluaciones hechas
      const evaluationsFound = await this.evaluationRepos.getEvaluationsByPPP( this.idPPP )

      
      message({
        response: this.response,
        code: CODE_STATUS.OK,
        data: {
          company: companiesFound,
          documents: documentsFound,
          advisor: advisorFound,
          evaluatons: evaluationsFound
        }
      })

    } catch (error) {
      message({
        response: this.response,
        code: CODE_STATUS.INTERNAL_SERVER_ERROR,
        info: error
      })
    }
  }
}