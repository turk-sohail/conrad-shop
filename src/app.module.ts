import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './database/database.module';
import { EnvModule } from './env/env.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [UsersModule, CommonModule, DatabaseModule, EnvModule, OrdersModule, PaymentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
