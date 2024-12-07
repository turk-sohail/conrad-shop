import { Test, TestingModule } from '@nestjs/testing';
import { TashoController } from './tasho.controller';
import { TashoService } from './tasho.service';

describe('TashoController', () => {
  let controller: TashoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TashoController],
      providers: [TashoService],
    }).compile();

    controller = module.get<TashoController>(TashoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
