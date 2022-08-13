import {IsNotEmpty, IsPositive} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateTariffsDto {
    @IsNotEmpty()
    @ApiProperty({
        description: "Name",
        example: "Ira"
    })
    name: string;

    @IsPositive()
    @ApiProperty({
        description: "Price in RUB",
        example: "1200"
    })
    price: number;

    @IsNotEmpty()
    @ApiProperty({
        description: "Comment",
        example: "!!!)))"
    })
    comment: string;

    @IsPositive()
    @ApiProperty({
        description: "Period in days",
        example: "365"
    })
    period: number;

    constructor(name: string, price: number, comment: string, period: number) {
        this.name = name;
        this.price = price;
        this.comment = comment;
        this.period = period;
    }
}