import 'dotenv/config';
import {
  ApartmentEntity
} from 'src/core/entities/index';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  entities: [
    ApartmentEntity
  ],
  migrations: [],
  migrationsRun: false,
  synchronize: false,
  migrationsTableName: 'migrations_history',
  logging: true
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;