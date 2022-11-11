import { Test, TestingModule } from '@nestjs/testing';
import { TipoComidasController } from './tipo-comidas.controller';
import { TipoComidasService } from './tipo-comidas.service';

describe('TipoComidasController', () => {
  let controller: TipoComidasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoComidasController],
      providers: [TipoComidasService],
    }).compile();

    controller = module.get<TipoComidasController>(TipoComidasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
