import { Test, TestingModule } from '@nestjs/testing';
import { CuentaContableService } from './cuenta-contable.service';

describe('CuentaContableService', () => {
  let service: CuentaContableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuentaContableService],
    }).compile();

    service = module.get<CuentaContableService>(CuentaContableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
