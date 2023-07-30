import { AppDataSource } from "../../../../config/database";
import { PPPRepository } from "../../domain/repositories";

import { PPPEntity } from "../entities";

export class PPPRepositoryImpl implements PPPRepository {
  private pppRepository = AppDataSource.getRepository(PPPEntity);

  constructor() {}
  async save(ppp: PPPEntity): Promise<PPPEntity> {
    return await this.pppRepository.save(ppp);
  }

  async findOnebyId(id: string): Promise<PPPEntity | null> {
    return await this.pppRepository.findOneBy({ id });
  }
}