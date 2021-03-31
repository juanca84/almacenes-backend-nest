import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CuentaContableService } from './cuenta-contable.service';
import { CreateCuentaContableDto } from './dto/create-cuenta-contable.dto';
import { UpdateCuentaContableDto } from './dto/update-cuenta-contable.dto';

@Controller('cuenta-contable')
export class CuentaContableController {
  constructor(private readonly cuentaContableService: CuentaContableService) {}

  @Post()
  create(@Body() createCuentaContableDto: CreateCuentaContableDto) {
    return this.cuentaContableService.create(createCuentaContableDto);
  }

  @Get()
  findAll() {
    return this.cuentaContableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cuentaContableService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCuentaContableDto: UpdateCuentaContableDto) {
    return this.cuentaContableService.update(+id, updateCuentaContableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cuentaContableService.remove(+id);
  }
}
