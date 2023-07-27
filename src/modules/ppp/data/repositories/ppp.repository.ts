import { AppDataSource } from "../../../../config/database";
import { PPPRepository } from "../../domain/repositories";

import { PPPEntity } from "../entities";

export class PPPRepositoryImpl implements PPPRepository {

    private pppRepository = AppDataSource.getRepository( PPPEntity )

    constructor() { }

}