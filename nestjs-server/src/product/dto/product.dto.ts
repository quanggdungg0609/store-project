import { ApiProperty } from "@nestjs/swagger"
import {IsNotEmpty, IsOptional, IsString, IsNumberString } from "class-validator"

export class ProductDto{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name:string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    brandName: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    type: string

    @ApiProperty()
    @IsOptional()
    @IsString({each:true})
    tag?: string[]

    
    @ApiProperty()
    @IsNumberString()
    buyPrice: number

    @ApiProperty()
    @IsNumberString()
    sellPrice: number

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    buyFrom: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string
}

