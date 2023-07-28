import { BadRequestException, ForbiddenException, HttpCode, HttpStatus, Injectable, ServiceUnavailableException, } from '@nestjs/common';
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
            let tags=[]
            // if product non-exist

            //if request only have 1 tag, add tag into a array
            if(typeof dto.tag==='string'){
                tags=[dto.tag]
            }
            else{
                tags=dto.tag
            }
            //create product
            await this.prisma.product.create({
                data:{
                    name:dto.name,
                    brandName: dto.brandName,
                    type:dto.type,
                    tag:tags,
                    buyFrom:dto.buyFrom,
                    sellPrice:Number(dto.sellPrice),
                    buyPrice:Number(dto.buyPrice),
                    description:dto.description
                }
            })
        }
        catch(error){
            throw new ServiceUnavailableException("Can not create new product")
        }
        return JSON.stringify(dto)
    }
}
