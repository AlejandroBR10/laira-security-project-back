import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn("uuid")
productId : string;
@Column("text")
productName :string;
@Column({type : "float"})
productPrice : number;
@Column({type : "int"})
countSeal : number


}
