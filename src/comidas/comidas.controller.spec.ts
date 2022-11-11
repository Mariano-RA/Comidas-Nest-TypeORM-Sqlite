import { Test, TestingModule } from '@nestjs/testing';
import { ComidasController } from './comidas.controller';
import { ComidasService } from './comidas.service';

describe('ComidasController', () => {
  let controller: ComidasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComidasController],
      providers: [ComidasService],
    }).compile();

    controller = module.get<ComidasController>(ComidasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
