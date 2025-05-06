import { ApiProperty } from "@nestjs/swagger";
import { Customer } from "src/customers/entities/customer.entity";
import { PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, OneToMany, Entity } from "typeorm";

@Entity()
export class Location {
    @PrimaryGeneratedColumn('increment')
    locationId : number;
    @ApiProperty({
        default: "Queretaro"
    })
    @Column('text')
    locationName : string;
    @ApiProperty({
        default: "Avenida de la Luz, S/N 76233"
    })
    @Column('text')
    locationAddress : string;
    @ApiProperty({
        default: [12,12]
    })
    @Column('simple-array')
    locationLatLng : number[];


   /* @OneToMany(() => Customer, (customer) => customer.location)
    customers: Customer[];*/
}
