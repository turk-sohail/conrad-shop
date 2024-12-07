import { Test, TestingModule } from '@nestjs/testing';
import { TashoService } from './tasho.service';

describe('TashoService', () => {
  let service: TashoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TashoService],
    }).compile();

    service = module.get<TashoService>(TashoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
