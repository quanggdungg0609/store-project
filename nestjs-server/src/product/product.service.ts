import { ForbiddenException, Injectable } from '@nestjs/common';
import { ProductDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class ProductService {

    constructor(private prisma:PrismaService){}

    async addProduct(dto: ProductDto){
        try{
            // check if product is exist on database
            const product = await this.prisma.product.findFirst({
                where:{
                    name:dto.name,
                    brandName:dto.brandName,
                    buyFrom:dto.buyFrom
                }
            })
            if (product){
                throw new ForbiddenException("Item exist")
            }
            console.log(typeof dto.buyPrice)
            console.log(typeof dto.sellPrice)
            
            // if product non-exist
    
            await this.prisma.product.create({
                data:{
                    name:dto.name,
                    brandName: dto.brandName,
                    type:dto.type,
                    tag:dto.tag,
                    buyFrom:dto.buyFrom,
                    sellPrice:Number(dto.sellPrice),
                    buyPrice:Number(dto.buyPrice),
                    description:dto.description
                }
            })
        }
        catch(error){
            console.error(error)
        }
        return JSON.stringify(dto)
    }
}
