import {ApiProperty} from "@nestjs/swagger";

export class TariffsRO {
    @ApiProperty({
        description: "Name",
        example: "Ira"
    })
    name: string;

    @ApiProperty({
        description: "Price in RUB",
        example: "1200"
    })
    price: number;

    @ApiProperty({
        description: "Comment",
        example: "!!!)))"
    })
    comment: string;

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