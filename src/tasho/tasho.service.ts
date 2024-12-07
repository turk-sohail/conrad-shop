import { Injectable } from '@nestjs/common';
import { CreateTashoDto } from './dto/create-tasho.dto';
import { UpdateTashoDto } from './dto/update-tasho.dto';

@Injectable()
export class TashoService {
  create(createTashoDto: CreateTashoDto) {
    return 'This action adds a new tasho';
  }

  findAll() {
    return `This action returns all tasho`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tasho`;
  }

  update(id: number, updateTashoDto: UpdateTashoDto) {
    return `This action updates a #${id} tasho`;
  }

  remove(id: number) {
    return `This action removes a #${id} tasho`;
  }
}
