import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmployeesModule } from './employees/employees.module';
import { ProvidersModule } from './providers/providers.module';

import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_KEY } from './auth/constants/jwt.constants';
import { EXPIRES_IN } from './auth/constants/jwt.constants';
import { CustomersModule } from './customers/customers.module';
import { LocationsModule } from './locations/locations.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.host,
        port: 5433,
        username: 'postgres',
        password: "TheBestPassword",
        database: process.env.name,
        entities: [],
        autoLoadEntities: true,
        synchronize: true,
      }),
      ConfigModule.forRoot(),
      EmployeesModule, ProvidersModule, AuthModule, CustomersModule, LocationsModule
    ],
  controllers: [],
  providers: [],
  
})
export class AppModule {}
