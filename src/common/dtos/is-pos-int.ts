import { applyDecorators } from '@nestjs/common';
import { IsInt, IsPositive } from 'class-validator';

/**
 *
 * Checks if value is positive integer
 */

const IsPosInt = (): PropertyDecorator =>
  applyDecorators(IsInt(), IsPositive());

export { IsPosInt };
