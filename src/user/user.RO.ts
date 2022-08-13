import {ApiProperty} from "@nestjs/swagger";

export class UserRO {
    @ApiProperty({
        description: "Id",
        example: "1"
    })
    id: number;

    @ApiProperty({
        description: "Email",
        example: "email@email.com"
    })
    email: string;

    @ApiProperty({
        description: "Name",
        example: "Irina"
    })
    name: string;

    @ApiProperty({
        description: "Telephone",
        example: "81234567890"
    })
    telephone?: string;

    constructor(id: number, email: string, name: string, telephone?: string) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.telephone = telephone;
    }
}