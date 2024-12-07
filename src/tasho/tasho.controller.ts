import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TashoService } from './tasho.service';
import { CreateTashoDto } from './dto/create-tasho.dto';
import { UpdateTashoDto } from './dto/update-tasho.dto';

@Controller('tasho')
export class TashoController {
  constructor(private readonly tashoService: TashoService) {}

  @Post()
  create(@Body() createTashoDto: CreateTashoDto) {
    return this.tashoService.create(createTashoDto);
  }

  @Get()
  findAll() {
    return this.tashoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tashoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTashoDto: UpdateTashoDto) {
    return this.tashoService.update(+id, updateTashoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tashoService.remove(+id);
  }
}
