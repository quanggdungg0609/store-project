import { Controller, Get, UseGuards, ValidationPipe, Body, Patch } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { ProductDto } from './dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}
    // @UseGuards(JwtGuard)
    @Get("add-product")
    addProduct(@Body(new ValidationPipe) dto: ProductDto){
        return this.productService.addProduct(dto)
    }

    @Patch("edit-product")
    editProduct(@Body(new ValidationPipe) dto: ProductDto){
        return dto
    }
}
