import { AppDataSource } from '../../../../config/database';
import { RolRepository } from '../../domain/repositories/rol.repository';
import { RolesEntity } from '../entities';

export class RolRepositoryImpl implements RolRepository {

    private repository = AppDataSource.getRepository( RolesEntity )

    async getRolById(id: string): Promise<RolesEntity | null> {
        return this.repository.findOneBy({ id })
    }

}