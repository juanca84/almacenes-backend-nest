import { Injectable } from '@nestjs/common';
import { CreateCuentaContableDto } from './dto/create-cuenta-contable.dto';
import { UpdateCuentaContableDto } from './dto/update-cuenta-contable.dto';

@Injectable()
export class CuentaContableService {
  create(createCuentaContableDto: CreateCuentaContableDto) {
    return 'This action adds a new cuentaContable';
  }

  findAll() {
    return `This action returns all cuentaContable`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cuentaContable`;
  }

  update(id: number, updateCuentaContableDto: UpdateCuentaContableDto) {
    return `This action updates a #${id} cuentaContable`;
  }

  remove(id: number) {
    return `This action removes a #${id} cuentaContable`;
  }
}
