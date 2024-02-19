import { Column,PrimaryGeneratedColumn, Entity } from "typeorm";
@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    userId:string;
    @Column()
    userPassword:string;
    @Column()
    userName:string;
    @Column({type:'simple-array',nullable:true})
    todos:string[];

}