import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNumber, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";

export class CreateProductDto {
    @ApiProperty()
    @IsString()
    @IsUUID("4")
    @IsOptional()
    @MaxLength(30)
    productId : string;
    @ApiProperty()
    @IsString()
    @MaxLength(30)
    productName : string;
    @ApiProperty()
    @IsNumber()
    productPrice: number;
    @ApiProperty()
    @IsInt()
    countSeal : number;


}
