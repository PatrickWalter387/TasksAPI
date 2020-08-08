import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Tasks{

    @PrimaryGeneratedColumn()
    id: number;

    @Column() //Por padrao vem not null
    title: string; //Varchar(255)

    @Column()
    description: string;

    @Column({ default: false}) //Define valor padrao na hora q se cria a Task
    finished: boolean;

    @CreateDateColumn() //Armazena a data exata de quando for criado uma Task
    createdAt: Date;

    @UpdateDateColumn() //Armazena a data exata de quando for atualizado a Task
    updateAt: Date;
}