import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class OrderItem {
  @PrimaryColumn()
  orderId: number;

  @PrimaryColumn()
  productId: number;

  @Column()
  quatity: number;
  @Column({ type: 'decimal', precision: 6, scale: 2 })
  price: number;
  @ManyToOne(() => Order, (order) => order.items, { onDelete: 'CASCADE' })
  order: Order;
  @ManyToOne(() => Product, (product) => product.items)
  product: Product;
}
