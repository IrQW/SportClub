import {Body, Controller, Get, Param, Post, Render, UseFilters} from '@nestjs/common';
import {UserService} from "./user.service";
import {UserRO} from "./user.RO";
import {ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Auth} from "../auth";
import {CreateUserDto} from "./createUser.DTO";
import {HttpExceptionFilter} from "../http-exception.filter";

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get('auth')
    @Render('index')
    dev() {
        return new Auth(true);
    }

    @ApiOperation({
        summary: 'Get user by email'
    })
    @ApiResponse({
        status: 200,
        description: 'The user was found.',
        type: UserRO
    })
    @ApiResponse({
        status: 400,
        description: 'The user wasn\'t found.'
    })
    @Get(':email')
    @UseFilters(new HttpExceptionFilter())
    getUser(@Param('email') email: string): Promise<UserRO> {
        return this.userService.findUserByEmail(email)
    }

    @ApiOperation({
        summary: 'Register user'
    })
    @ApiCreatedResponse({
        description: 'The user has been successfully created.'
    })
    @Post('reg')
    async register(@Body() createUserDto: CreateUserDto) {
        await this.userService.createUser(createUserDto);
    }
}