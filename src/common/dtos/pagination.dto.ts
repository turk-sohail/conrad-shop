import { IsOptional } from 'class-validator';
import { IsPosInt } from './is-pos-int';

export class PaginationDto {
  @IsOptional()
  @IsPosInt()
  limit: number;
  @IsOptional()
  @IsPosInt()
  offset: number;
}
