import { Test, TestingModule } from '@nestjs/testing';
import { TipoComidasService } from './tipo-comidas.service';

describe('TipoComidasService', () => {
  let service: TipoComidasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoComidasService],
    }).compile();

    service = module.get<TipoComidasService>(TipoComidasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
