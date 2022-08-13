import { Module } from '@nestjs/common';
import {PrismaService} from "../data/prisma.service";
import {ClubsController} from "./clubs.controller";
import {ClubsService} from "./clubs.service";

@Module({
    imports: [],
    controllers: [ClubsController],
    providers: [ClubsService, PrismaService],
})
export class ClubsModule {}