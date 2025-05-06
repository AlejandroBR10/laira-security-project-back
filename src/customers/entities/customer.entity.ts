import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  ManyToOne,
} from "typeorm";

import { Location } from "src/locations/entities/location.entity";
import { User } from "src/auth/entities/user.entity";
@Entity()
export class Customer {
  @PrimaryGeneratedColumn("uuid")
  customerId: string;
  @Column("text")
  customerName: string;
  @Column("text")
  customerLastName: string;
  @Column("text")
  customerPhoneNumber: string;
  @Column("text", {
    unique: true,
  })
  customerEmail: string;
  @OneToOne(() => User)
  @JoinColumn({
    name: "userId",
  })
  user: User;
}
