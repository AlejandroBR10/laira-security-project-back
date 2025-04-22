import { Entity, Column , PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne } from "typeorm";

import { User } from "src/auth/entities/user.entity";
@Entity()
export class Employee {
     @PrimaryGeneratedColumn("uuid")
            employeeId : string;
           @Column('text')
            employeeName : string;
            @Column('text')
            employeeLastName: string;
            @Column('text')
            employeePhoneNumber : string;
            @Column('text', {
                unique: true,
            })
            employeeEmail: string;
            @Column({
               type: "text",
               nullable: true
            })
            employeePhoto : string

          
            
                @OneToOne (() => User)
                @JoinColumn({
                    name: 'userId',
                })
                user: User;
}
