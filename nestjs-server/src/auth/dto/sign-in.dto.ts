import { IsString, IsNotEmpty } from "class-validator"

export class SignInDto{
    @IsNotEmpty()
    @IsString()
    accountId:string

    @IsNotEmpty()
    @IsString()
    password:string
}