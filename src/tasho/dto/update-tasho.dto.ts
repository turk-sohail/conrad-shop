import { PartialType } from '@nestjs/mapped-types';
import { CreateTashoDto } from './create-tasho.dto';

export class UpdateTashoDto extends PartialType(CreateTashoDto) {}
