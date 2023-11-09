import { AppDataSource } from '../../../../config/database'
import { CreateUserDto } from '../../domain/dtos'

import { UserRepository } from '../../domain/repositories'
import { AccessEntity, AccessRoleEntity, RoleUserEntity, RolesEntity, UserEntity } from '../entities'

export class UserRepositoryImpl implements UserRepository {

  private userRepository = AppDataSource.getRepository(UserEntity);

  constructor() {}

  findUserByEmail(userName: string): Promise<UserEntity | null> {
    return this.userRepository.findOneBy({ userName });
  }

  async create(userCreateDto: CreateUserDto): Promise<UserEntity> {
    return await this.userRepository.create(userCreateDto);
  }

  save(userCreated: UserEntity): Promise<UserEntity> {
    return this.userRepository.save(userCreated);
  }

  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findById(id: string): Promise<UserEntity | null> {
    return await this.userRepository.findOneBy({ id });
  }

  async findByRol(rolSearch: string): Promise<UserEntity[]> {
    return await this.userRepository
      .createQueryBuilder("u")
      .leftJoin("roles_user", "ru", "u.id = ru.userId")
      .leftJoin("roles", "r", "ru.roleId = r.id")
      .where("r.name = :name", { name: rolSearch })
      .getMany();
  }

  async findByIdWithRolesAndAccess(userId: string): Promise<UserEntity | null> {
    return await this.userRepository
      .createQueryBuilder("user")
      .leftJoinAndMapMany(
        "user.roleUser",
        RoleUserEntity,
        "roleUser",
        "roleUser.userId = user.id"
      )
      .leftJoinAndMapMany(
        "roleUser.role",
        RolesEntity,
        "role",
        "role.id = roleUser.roleId"
      )
      .leftJoinAndMapMany(
        "role.accessRoles",
        AccessRoleEntity,
        "accessRole",
        "accessRole.roleId = role.id"
      )
      .leftJoinAndMapMany(
        "accessRole.access",
        AccessEntity,
        "access",
        "access.id = accessRole.accessId"
      )
      .where("user.id = :userId", { userId })
      .orderBy("accessRole.numPosition", "ASC")
      .getOne();
  }

  findByIdPPP(idPPP: string): Promise<UserEntity | null> {
    return this.userRepository
      .createQueryBuilder("user")
      .innerJoin("user.ppp", "ppp")
      .where("ppp.id = :pppId", { pppId: idPPP })
      .getOne();
  }

  async saveRol(rolId: string, userId: string): Promise<boolean> {

    try {

      const query = `INSERT INTO roles_user(roleId, userId) VALUES(${ rolId }, ${ userId })`

      const data = await this.userRepository.query( query )

      console.log({ data })

      return true

    } catch ( error ) {
      throw error
    }

  }

}
