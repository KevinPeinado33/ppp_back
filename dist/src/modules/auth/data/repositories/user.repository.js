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
            .createQueryBuilder('u')
            .leftJoin('roles_user', 'ru', 'u.id = ru.userId')
            .leftJoin('roles', 'r', 'ru.roleId = r.id')
            .where('r.name = :name', { name: rolSearch })
            .getMany();
    }
}
exports.UserRepositoryImpl = UserRepositoryImpl;
//# sourceMappingURL=user.repository.js.map