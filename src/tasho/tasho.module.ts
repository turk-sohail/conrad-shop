import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tasho } from './entities/tasho.entity';
import { TashoController } from './tasho.controller';
import { TashoService } from './tasho.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tasho])],
  controllers: [TashoController],
  providers: [TashoService],
})
export class TashoModule {}
