import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { AuthGuard } from 'src/auth/guards/auth.guards';
import { Roles } from 'src/auth/decorators/roles.decorators';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { ROLES } from 'src/auth/constants/roles.constants';
import { ApiAuth } from 'src/auth/decorators/api.decorator';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Location } from './entities/location.entity';

@ApiAuth()

@ApiBearerAuth()
@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Auth(ROLES.MANAGER)
 @ApiResponse({
    status: 201,
    example: {
  locationName: "Juriquilla",
   locationAddress: "Avenida Tal, S/N 76220",
   locationLatLng: [34,32],
    } as Location
  })
  @Post()
  create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationsService.create(createLocationDto);
  }
  @Auth(ROLES.MANAGER)
  @ApiResponse({
    status: 201,
    example: {
      message :"This route return ALL existing locations on DB"
    }
  })
  @Get()
  findAll() {
    return this.locationsService.findAll();
  }

  @Auth(ROLES.MANAGER)
  @ApiResponse({
    status: 201,
    example: {
     message :"This route return the specific location with the corresponding ID"
    }
  })
  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe({version: "4"})) id: string) {
    return this.locationsService.findOne(+id);
  }

  @Auth(ROLES.MANAGER)
  @ApiResponse({
    status: 201,
    example: {
     message :"This route update the specific location with the corresponding ID"
    }
  })
  @Patch('/:id')
  update(@Param('id',new ParseUUIDPipe({version: "4"})) id: string, @Body() updateLocationDto: UpdateLocationDto) {
    return this.locationsService.update(+id, updateLocationDto);
  }


  @Auth(ROLES.MANAGER)
  @ApiResponse({
    status: 201,
    example: {
     message :"This route remove the location with the corresponding ID"
    }
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locationsService.remove(+id);
  }
}
