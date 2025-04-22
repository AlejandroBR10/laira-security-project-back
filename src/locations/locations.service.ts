import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './entities/location.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LocationsService {

  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ){}
  async create(createLocationDto: CreateLocationDto) {
    const location = await this.locationRepository.save(createLocationDto);
    return location;
  }

  findAll() {
    return this.locationRepository.find();
  }

  findOne(id: number) {
    const location= this.locationRepository.findOneBy({locationId: id});
    if(!location){
      throw new NotFoundException();
    }
    return location;
  }

 async  update(id: number, updateLocationDto: UpdateLocationDto) {
  const locationToUpdate = await this.locationRepository.preload({
    locationId: id, 
    ...updateLocationDto,
  });
  if(!locationToUpdate) throw new NotFoundException();
  this.locationRepository.save(locationToUpdate);

  return locationToUpdate;
  }

  remove(id: number) {
   
    this.findOne(id);
    const location  = this.locationRepository.delete({locationId: id});
    return {
      message : `Ubicacion con el id:${id} eliminada correctamente`,
    }
  }
}
