import {Controller, Get, NotImplementedException, Post, Query} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {TariffsService} from "./tariffs.service";
import {TariffsRO} from "./tariffs.RO";

@ApiTags('tariffs')
@Controller('tariffs')
export class TariffsController {
    constructor(private readonly tariffsService: TariffsService) {
    }

    @ApiOperation({
        summary: 'Get all tariffs'
    })
    @ApiResponse({
        status: 200,
        description: 'Tariffs were found.',
        type: [TariffsRO]
    })
    @ApiResponse({
        status: 400,
        description: 'Tariffs wasn\'t found.'
    })
    @Get()
    getAll(): Promise<Array<TariffsRO>> {
        return this.tariffsService.findAll();
    }

}