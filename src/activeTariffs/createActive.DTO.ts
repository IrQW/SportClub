import {IsDate, IsPositive} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from 'class-transformer';

export class CreateActiveDto {
    @IsPositive()
    @ApiProperty({
        description: "Tariff id",
        example: "1"
    })
    tariff_id: number;

    @Type(() => Date)
    @ApiProperty({
        description: "Data of start",
        example: "2002-02-13"
    })
    time_start: Date;


    constructor(tariff_id: number, time_start?: Date) {
        this.tariff_id = tariff_id;
        this.time_start = time_start;
    }
}