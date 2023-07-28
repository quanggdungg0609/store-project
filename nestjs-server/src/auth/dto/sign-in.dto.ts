import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNotEmpty } from "class-validator"

export class SignInDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    accountId:string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password:string
}