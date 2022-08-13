import {Body, Controller, Post, Query, Delete} from '@nestjs/common';
import {AdminService} from "./admin.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateClubsDTO} from "./createClubs.DTO";
import {CreateTariffsDto} from "./createTariffs.DTO";

@ApiTags('admin')
@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @ApiOperation({
        summary: 'Add club'
    })
    @ApiResponse({
        status: 201,
        description: 'The club has been successfully created.'})
    @Post('clubs')
    async createClub(@Body() club: CreateClubsDTO) {
        await this.adminService.createClub(club)
    }

    @ApiOperation({
        summary: 'Delete club'
    })
    @ApiResponse({
        status: 200,
        description: 'The club has been successfully deleted.'})
    @Delete('clubs')
    async deleteClub(@Query('id') clubId: number) {
        await this.adminService.deleteClub(clubId)
    }

    @ApiOperation({
        summary: 'Add tariff'
    })
    @ApiResponse({
        status: 201,
        description: 'The tariff has been successfully created.'})
    @Post('tariffs')
    async createTariff(@Body() tariff: CreateTariffsDto) {
        await this.adminService.createTariff(tariff)
    }

    @ApiOperation({
        summary: 'Delete tariff'
    })
    @ApiResponse({
        status: 200,
        description: 'The tariff has been successfully deleted.'})
    @Delete('tariffs')
    async deleteTariff(@Query('id') tariffId: number) {
        await this.adminService.deleteTariff(tariffId)
    }
}