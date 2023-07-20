import {IsNotEmpty, IsOptional, IsString, IsNumberString } from "class-validator"

export class ProductDto{
    @IsString()
    @IsNotEmpty()
    name:string

    @IsString()
    @IsNotEmpty()
    brandName: string

    @IsString()
    @IsNotEmpty()
    type: string

    @IsOptional()
    @IsString({each:true})
    tag?: string[]

    
    
    @IsNumberString()
    buyPrice: number

    
    @IsNumberString()
    sellPrice: number

    @IsString()
    @IsNotEmpty()
    buyFrom: string

    @IsNotEmpty()
    @IsString()
    description: string
}

