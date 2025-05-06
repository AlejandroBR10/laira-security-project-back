import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiAuth } from 'src/auth/decorators/api.decorator';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ROLES } from 'src/auth/constants/roles.constants';
import { Product } from './entities/product.entity';


@ApiAuth()
@ApiBearerAuth()
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}


  @Auth(ROLES.ADMIN)
  @ApiResponse({
    status: 201 ,
    example: {
      productId : "UUID" ,
      productName: "Camara de Vigilancia" ,
      productPrice : 1500.0 ,
      countSeal : 2
    } as Product
  })
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Auth()
  @ApiResponse({
    status: 201,
    example: {
      message :"This route return ALL existing products on DB"
    }
  })
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Auth(ROLES.MANAGER)
  @ApiResponse({
    status: 201,
    example: {
      message :"This route return the specific product with the corresponding ID"
    }
  })
  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe({version : "4"})) id: string) {
    return this.productsService.findOne(id);
  }


  @Auth(ROLES.MANAGER)
  @ApiResponse({
    status: 201,
    example: {
     message :"This route update the specific product with the corresponding ID"
    }
  })
  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Auth(ROLES.MANAGER)
  @ApiResponse({
    status: 201,
    example: {
     message :"This route remove the specific customer with the corresponding ID"
    }
  })
  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe({version: "4"})) id: string) {
    return this.productsService.remove(id);
  }
}
