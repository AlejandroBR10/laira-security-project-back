import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository : Repository<Customer>,
  ){}

  async create(createCustomerDto: CreateCustomerDto) {
    const customer = await this.customerRepository.save(createCustomerDto);
    return customer;
  }

  findAll() {
    return this.customerRepository.find();
  }

  findOne(id: string) {
    const customer = this.customerRepository.findOneBy({customerId:id});
    if(!customer){
      throw new NotFoundException();
    }
    return customer;
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    const customerToUpdate = await this.customerRepository.preload({
      customerId: id,
       ...updateCustomerDto
    });
    if(!customerToUpdate) throw new NotFoundException();
    this.customerRepository.save(customerToUpdate);

    return customerToUpdate;
  }

  remove(id: string) {
    this.findOne(id);
    const customer = this.customerRepository.delete({customerId : id});
    return {
      message : `Cliente con el id:${id} eliminado correctamente`,
    }
  }
}
