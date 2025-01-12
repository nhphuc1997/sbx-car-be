import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './Base.entity.js';
import { ApiProperty } from '@nestjs/swagger';

@Entity('card')
export class Card extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  @ApiProperty()
  cardNumber: string;

  @Column({ nullable: true })
  @ApiProperty()
  nameOnCard: string;

  @Column({ nullable: true })
  @ApiProperty()
  expDate: string;

  @Column({ nullable: true })
  @ApiProperty()
  cvv: string;
}
