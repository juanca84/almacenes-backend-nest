import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CuentaContableModule } from './cuenta-contable/cuenta-contable.module';

@Module({
  imports: [DatabaseModule, CuentaContableModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
