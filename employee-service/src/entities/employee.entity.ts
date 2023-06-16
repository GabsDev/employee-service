import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('employee')

export class Employee {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column({type:String})
    age:number;
    @Column({type:Number})
    name:string;
    @Column({type:String})
    position:string;
}