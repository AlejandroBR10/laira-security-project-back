import { Customer } from "src/customers/entities/customer.entity";
import { Employee } from "src/employees/entities/employee.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class User {
@PrimaryGeneratedColumn('uuid')
userId: string;
@Column('text', {
    unique: true,
})
userEmail: string;
@Column('text')
userPassword: string;
@Column('simple-array',{
    default: "Employee"
})
userRoles: string[];

@OneToOne(() => Customer)
customer: Customer;

}