import { IsNumberString, IsOptional, IsString } from "class-validator"

export class EditProductDto{
    @IsOptional()
    name?:string

    @IsOptional()
    brandName?: string

    @IsOptional()
    @IsString()
    type?: string

    @IsOptional()
    @IsString({each:true})
    tag?: string[]

    
    @IsOptional()
    @IsNumberString()
    buyPrice?: number

    @IsOptional()
    @IsNumberString()
    sellPrice?: number

    @IsString()
    @IsOptional()
    buyFrom?: string

    @IsOptional()
    @IsString()
    description?: string


}