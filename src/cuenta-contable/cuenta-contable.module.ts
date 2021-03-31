import { Module } from '@nestjs/common';
import { CuentaContableService } from './cuenta-contable.service';
import { CuentaContableController } from './cuenta-contable.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuentaContable } from './entities/cuenta-contable.entity';

@Module({
  controllers: [CuentaContableController],
  providers: [CuentaContableService],
  imports: [TypeOrmModule.forFeature([CuentaContable])]
})
export class CuentaContableModule {}
