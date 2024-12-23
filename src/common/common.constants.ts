import { ValidationPipeOptions } from '@nestjs/common';

export const VALIDATION_CONSTANTS: ValidationPipeOptions = {
  whitelist: true,
  forbidNonWhitelisted: true,
  transform: true,
  transformOptions: {
    enableImplicitConversion: true,
  },
};

export const DEFAULT_PAGE_SIZE = {
  USER: 10,
  ORDER: 5,
  CATEGORIES: 5,
} as const satisfies Record<string, number>;
