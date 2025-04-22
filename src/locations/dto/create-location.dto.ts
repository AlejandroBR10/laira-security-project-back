import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, IsArray, ArrayNotEmpty, IsObject, IsOptional, IsUUID } from "class-validator";

export class CreateLocationDto {

    @ApiProperty()
@IsString()
@MaxLength(35)
 locationName: string;
 @ApiProperty()
 @IsString()
 @MaxLength(160)
 locationAddress: string;
 @ApiProperty()
 @IsArray()
 @ArrayNotEmpty()
 locationLatLng: number[];
  
}
