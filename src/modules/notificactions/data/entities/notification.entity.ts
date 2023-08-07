import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { UserEntity } from "../../../auth/data/entities";
import { ShareEntity } from "./share.entity";

@Entity({ name: 'notifications' })
export class NotificationsEntity {

    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({ type: 'varchar' })
    title!: string

    @Column({ type: 'varchar' })
    message!: string

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'created_at',
    })
    createdAt!: Date

    @Column({ type: 'bool' , default: true})
    status!: boolean

    @ManyToOne(
        () => UserEntity,
        (property) => property.notifications
    )
    property!: UserEntity

    @OneToMany(
        () => ShareEntity,
        (share) => share.notification
    )
    share!: ShareEntity[]


}