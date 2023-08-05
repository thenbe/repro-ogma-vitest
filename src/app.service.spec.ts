import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { createProviderToken } from '@ogma/nestjs-module';
import { vi } from 'vitest';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: createProviderToken(AppService.name),
          useValue: {
            log: vi.fn(),
            trace: vi.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('getHello should throw', () => {
    expect(() => service.getHello()).toThrow();
  });

  it('getHelloAsync should throw', async () => {
    await expect(service.getHelloAsync()).rejects.toThrow();
  });
});
