import { RegistryDates } from 'src/common/embedded/registry-dates.embedded';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrderStatus } from '../enums/order-status.enum';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.AWITING_PAYMENT,
  })
  status: OrderStatus;
  @Column(() => RegistryDates, { prefix: false })
  registryDates: RegistryDates;

  @ManyToOne(() => User, (customer) => customer.orders, { nullable: false })
  customer: User;
}
