import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CuentaContable {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 50, unique: true })
    codigo: string;

    @Column({ type: "varchar", length: 200 })
    nombre: string;

    @Column({ default: true })
    estado: boolean;
}
