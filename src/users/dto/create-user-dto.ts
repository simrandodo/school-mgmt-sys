import { IsString } from "class-validator";
export class CreateUserDto {
    @IsString()
    readonly userid:string;
    @IsString()
    userPassword:string;
    @IsString()
    readonly userName:string;


}