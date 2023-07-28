import { Controller, Get, UseGuards, ValidationPipe, Body, Patch, Query } from '@nestjs/common';
import { AuthenticationGuard } from 'src/auth/guard';
import { ProductDto } from './dto';
import { ProductService } from './product.service';
import { ApiBearerAuth, ApiTags, ApiResponse } from '@nestjs/swagger';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}
    
    @UseGuards(AuthenticationGuard) //TODO: active later
    @ApiTags("Products")
    @ApiBearerAuth()
    @ApiResponse({
        status:200,
        description:"Request successful"
    })
    @ApiResponse({
        status:403,
        description:"Item exist in database"
    })
    @ApiResponse({
        status:500,
        description:"Can not create new product"
    })
    @Get("add-product")
    addProduct(@Query(new ValidationPipe) dto: ProductDto){
        return this.productService.addProduct(dto)
    }


    @ApiTags("Products")
    @Patch("edit-product")
    editProduct(@Body(new ValidationPipe) dto: ProductDto){
        return dto
    }

    
}
