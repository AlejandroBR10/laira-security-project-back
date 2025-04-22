import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiAuth } from 'src/auth/decorators/api.decorator';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ROLES } from 'src/auth/constants/roles.constants';
import { Customer } from './entities/customer.entity';


@ApiAuth()
//@ApiTags('Employees')
@ApiBearerAuth()

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

   @Auth(ROLES.MANAGER)
    @ApiResponse({
      status: 201,
      example: {
        customerId: "UUID",
        customerName : "Alejandro",
       customerEmail : "alejandro@gmail.com",
        customerLastName : "Balderas",
        customerPhoneNumber : "1234567890" ,
      } as Customer
    })
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @Auth(ROLES.MANAGER)
@ApiResponse({
  status: 201,
  example: {
    message :"This route return ALL existing customers on DB"
  }
})
  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Auth(ROLES.MANAGER)
  @ApiResponse({
    status: 201,
    example: {
     message :"This route return the specific customer with the corresponding ID"
    }
  })
  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe({version: "4"})) id: string) {
    return this.customersService.findOne(id);
  }

  @Auth(ROLES.MANAGER)
  @ApiResponse({
    status: 201,
    example: {
     message :"This route update the specific customer with the corresponding ID"
    }
  })
  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customersService.update(id, updateCustomerDto);
  }

  @Auth(ROLES.MANAGER)
  @ApiResponse({
    status: 201,
    example: {
     message :"This route remove the customer with the corresponding ID"
    }
  })
  @Delete(':id')
  remove(@Param('id',new ParseUUIDPipe({version: "4"})) id: string) {
    return this.customersService.remove(id);
  }
}
