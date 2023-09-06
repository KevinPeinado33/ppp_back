import { AppDataSource } from '../../../../config/database'
import { PPPRepository } from '../../domain/repositories'

import { PPPEntity } from '../entities'

export class PPPRepositoryImpl implements PPPRepository {

  private pppRepository = AppDataSource.getRepository(PPPEntity)

  constructor() {}

  async getStartDate(): Promise<Map<string, object>[]> {
    return await this.pppRepository
                        .createQueryBuilder("ppp")
                        .select(['ppp.advisor', 'ppp.started_date'])
                        //.select('ppp.started_date', 'startDate')
                        .getRawMany();
    
  }
  
  async save(ppp: PPPEntity): Promise<PPPEntity> {
    return await this.pppRepository.save(ppp)
  }
  
  async findOnebyId(id: string): Promise<PPPEntity | null> {
    return await this.pppRepository.findOneBy({ id })
  }

  async findLastOneWithCompanyByStudent(studentCode: string): Promise<PPPEntity | null> {

    return await this.pppRepository
                      .createQueryBuilder('ppp')
                      .innerJoinAndSelect('ppp.student', 'student', 'student.code = :studentCode', { studentCode })
                      .leftJoinAndSelect('ppp.company', 'company')
                      .orderBy('ppp.startedDate', 'DESC')
                      .getOne()

  }

}