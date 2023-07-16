import {IsEmail, IsNotEmpty, IsString  } from "class-validator"

export class AuthDto{
    @IsNotEmpty()
    @IsString()
    accountId: string

    @IsNotEmpty()
    @IsString()
    password: string

    @IsNotEmpty()
    @IsEmail()
    email: string
 
    @IsNotEmpty()
    @IsString()
    firstName: string

    @IsNotEmpty()
    @IsString()
    lastName: string

    
}