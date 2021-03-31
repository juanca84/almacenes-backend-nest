import { Test, TestingModule } from '@nestjs/testing';
import { CuentaContableController } from './cuenta-contable.controller';
import { CuentaContableService } from './cuenta-contable.service';

describe('CuentaContableController', () => {
  let controller: CuentaContableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuentaContableController],
      providers: [CuentaContableService],
    }).compile();

    controller = module.get<CuentaContableController>(CuentaContableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
