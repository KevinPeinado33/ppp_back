"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryImpl = void 0;
const database_1 = require("../../../../config/database");
const entities_1 = require("../entities");
class UserRepositoryImpl {
    constructor() {
        this.userRepository = database_1.AppDataSource.getRepository(entities_1.UserEntity);
    }
    findUserByEmail(userName) {
        return this.userRepository.findOneBy({ userName });
    }
    async create(userCreateDto) {
        return await this.userRepository.create(userCreateDto);
    }
    save(userCreated) {
        return this.userRepository.save(userCreated);
    }
    findAll() {
        return this.userRepository.find();
    }
    async findById(id) {
        return await this.userRepository.findOneBy({ id });
    }
    async findByRol(rolSearch) {
        return await this.userRepository
            .createQueryBuilder("u")
            .leftJoin("roles_user", "ru", "u.id = ru.userId")
            .leftJoin("roles", "r", "ru.roleId = r.id")
            .where("r.name = :name", { name: rolSearch })
            .getMany();
    }
    async findByIdWithRolesAndAccess(userId) {
        return await this.userRepository
            .createQueryBuilder("user")
            .leftJoinAndMapMany("user.roleUser", entities_1.RoleUserEntity, "roleUser", "roleUser.userId = user.id")
            .leftJoinAndMapMany("roleUser.role", entities_1.RolesEntity, "role", "role.id = roleUser.roleId")
            .leftJoinAndMapMany("role.accessRoles", entities_1.AccessRoleEntity, "accessRole", "accessRole.roleId = role.id")
            .leftJoinAndMapMany("accessRole.access", entities_1.AccessEntity, "access", "access.id = accessRole.accessId")
            .where("user.id = :userId", { userId })
            .orderBy("accessRole.numPosition", "ASC")
            .getOne();
    }
    findByIdPPP(idPPP) {
        return this.userRepository
            .createQueryBuilder("user")
            .innerJoin("user.ppp", "ppp")
            .where("ppp.id = :pppId", { pppId: idPPP })
            .getOne();
    }
    async saveRol(rolId, userId) {
        try {
            const query = `INSERT INTO roles_user(roleId, userId) VALUES(${rolId}, ${userId})`;
            const data = await this.userRepository.query(query);
            console.log({ data });
            return true;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.UserRepositoryImpl = UserRepositoryImpl;
//# sourceMappingURL=user.repository.js.map