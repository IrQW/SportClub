import {Controller, Get, NotImplementedException, Param, Post, Query, Render} from '@nestjs/common';
import {ClubsService} from "./clubs.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('clubs')
@Controller()
export class ClubsController {
    constructor(private readonly clubsService: ClubsService) {
    }

    @ApiOperation({
        summary: 'Add club'
    })
    @ApiResponse({
        status: 201,
        description: 'The club has been successfully created.'})
    @Post('clubs')
    post(@Query('name') email: string,
         @Query('address') content: string) {
        throw new NotImplementedException();
    }
}