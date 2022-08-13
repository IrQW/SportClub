import {ApiProperty} from "@nestjs/swagger";

export class ActiveRO {
    @ApiProperty({
        description: "Tariff id",
        example: "1"
    })
    tariff_id: number;

    @ApiProperty({
        description: "Data of start",
        example: "2002-02-13"
    })
    time_start: Date;

    @ApiProperty({
        description: "Data of end",
        example: "2002-02-13"
    })
    time_end: Date;

    constructor(tariff_id: number, time_start: Date, time_end: Date) {
        this.tariff_id = tariff_id;
        this.time_start = time_start;
        this.time_end = time_end;
    }
}