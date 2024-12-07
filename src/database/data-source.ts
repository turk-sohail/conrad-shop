import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
dotenv.config();
/*

DB_USERNAME = postgres;
DB_PASSWORD = postgres;
DB_HOST = localhost;
DB_PORT = 5444;
DB_NAME = conrod;

*/

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  dropSchema: false,
  logging: false,
  logger: 'file',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['src/migrations/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  migrationsTableName: 'migration_table',
});
