import { PPPEntity } from '../../data/entities'

export abstract class PPPRepository {
  
  abstract findOnebyId(id: string): Promise<PPPEntity | null>
  abstract save(ppp: PPPEntity): Promise<PPPEntity>
  abstract findLastOneWithCompanyByStudent(studentCode: string): Promise< PPPEntity | null >

}