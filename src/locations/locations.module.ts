import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Location } from './entities/location.entity';

@Module({
   imports : [TypeOrmModule.forFeature([Location]),
  AuthModule ],
  controllers: [LocationsController],
  providers: [LocationsService],
})
export class LocationsModule {}
