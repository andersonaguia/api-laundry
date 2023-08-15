import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from 'src/common/env';
import { join } from 'path';
import { dataSourceOptions } from 'src/core/database/data-source';
import { ApartmentsModule } from '../apartments/apartments.module';
import { ResidentsModule } from '../residents/residents.module';
import { AuthModule } from 'src/core/auth/auth.module';
import { MachinesModule } from '../machines/machines.module';
import { ConfigurationModule } from '../configuration/configuration.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', '..', 'public'),
    }),
    TypeOrmModule.forRoot({ autoLoadEntities: true, ...dataSourceOptions }),
    ApartmentsModule,
    ResidentsModule,
    AuthModule,
    MachinesModule,
    ConfigurationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
