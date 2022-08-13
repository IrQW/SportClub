import {Body, Controller, ParseIntPipe, Post, Query} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {ActiveService} from "./active.service";
import {CreateActiveDto} from "./createActive.DTO";

@ApiTags('active')
@Controller()
export class ActiveController {
    constructor(private readonly activeService: ActiveService) {
    }

    @ApiOperation({
        summary: 'Activate tariff'
    })
    @ApiResponse({
        status: 201,
        description: 'The tariff has been successfully activate.'})
    @Post('active')
    async follow(@Body() activeTariff: CreateActiveDto,
         @Query('userId', ParseIntPipe) userId: number) {
        await this.activeService.follow(activeTariff, userId);
    }
}