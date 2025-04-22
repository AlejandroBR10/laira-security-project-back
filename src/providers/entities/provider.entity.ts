import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Provider {
    @PrimaryGeneratedColumn('uuid')
    providerId : string;
     @ApiProperty({
            default: "Coca-Cola Company"
        })
    @Column('text')
    providerName : string;
    @ApiProperty({
        default: "cocacola@gmail.com"
    })
    @Column('text', {
        unique: true
    })
    providerEmail : string;
    @ApiProperty({
        default: "4421237891"
    })
    @Column({
        type: 'text',
        nullable: true
    })
    providerPhoneNumber : string


}
