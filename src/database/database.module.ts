import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuentaContable } from '../cuenta-contable/entities/cuenta-contable.entity';

require('dotenv').config()

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        entities: [CuentaContable],
        synchronize: true
    })]
})
export class DatabaseModule {}
