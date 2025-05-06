import {  IsEmail, IsObject, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";

import { Location } from "src/locations/entities/location.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { User } from "src/auth/entities/user.entity";

export class CreateCustomerDto {

      @ApiProperty()
          @IsString()
            @IsUUID("4")
            @IsOptional()
            @MaxLength(30)
            customerId: string;
    
            @ApiProperty()
            @IsString()
            @MaxLength(30)
            customerName : string;
    
            @ApiProperty()
            @IsString()
            @MaxLength(70)
            customerLastName: string;
    
            @ApiProperty()
            @IsString()
            @MaxLength(10)
            customerPhoneNumber : string;
    
            @ApiProperty()
            @IsEmail()
           customerEmail: string;

           @ApiPropertyOptional()
           @IsOptional()
           @IsObject()
           user : User;
}
