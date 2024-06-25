import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'freedom_walls',
})
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
}