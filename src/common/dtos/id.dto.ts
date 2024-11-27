import { IsPosInt } from './is-pos-int';

export class IdDto {
  @IsPosInt()
  id: number;
}
