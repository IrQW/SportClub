import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateClubsDTO {
    @IsNotEmpty()
    @ApiProperty({
        description: "Name",
        example: "Ira"
    })
    name: string;

    @IsNotEmpty()
    @ApiProperty({
        description: "Address",
        example: "St. Petersburg"
    })
    address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
}