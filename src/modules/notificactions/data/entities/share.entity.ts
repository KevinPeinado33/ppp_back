import {  Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "../../../auth/data/entities";
import { NotificationsEntity } from "./notification.entity";


@Entity({name: 'share'})
export class ShareEntity{

    @PrimaryGeneratedColumn('uuid')
    id!: string
    
    @ManyToOne(
        () => UserEntity,
        (address) => address.share
    )
    address!: UserEntity

    @ManyToOne(
        () => NotificationsEntity,
        (notification) => notification.share
    )
    notification!: NotificationsEntity
    
}