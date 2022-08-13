import {IsEmail, IsNotEmpty, IsPhoneNumber} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @IsEmail()
    @ApiProperty({
        description: "Email",
        example: "email@email.com"
    })
    email: string;

    @IsNotEmpty()
    @ApiProperty({
        description: "Name",
        example: "Ira"
    })
    name: string;

    @IsNotEmpty()
    @ApiProperty({
        description: "Password",
        example: "password"
    })
    pass: string;

    @IsPhoneNumber("RU")
    @ApiProperty({
        description: "Telephone",
        example: "+78005553535"
    })
    telephone?: string;

    constructor(email: string, name: string, pass: string, telephone?: string) {
        this.name = name;
        this.email = email;
        this.pass = pass;
        this.telephone = telephone;
    }
}