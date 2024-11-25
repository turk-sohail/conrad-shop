import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { VALIDATION_CONSTANTS } from './common.constants';

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe(VALIDATION_CONSTANTS),
    },
  ],
})
export class CommonModule {}
