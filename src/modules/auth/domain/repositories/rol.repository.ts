import { RolesEntity } from "../../data/entities";

export abstract class RolRepository {
    abstract getRolById(id: string): Promise< RolesEntity | null >
}