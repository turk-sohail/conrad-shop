import { ValidationPipeOptions } from '@nestjs/common';

export const VALIDATION_CONSTANTS: ValidationPipeOptions = {
  whitelist: true,
  forbidNonWhitelisted: true,
  transform: true,
  transformOptions: {
    enableImplicitConversion: true,
  },
};
