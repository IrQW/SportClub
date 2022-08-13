import { Module } from '@nestjs/common';
import {PrismaService} from "../data/prisma.service";
import {ActiveController} from "./active.controller";
import {ActiveService} from "./active.service";
import {TariffsService} from "../tariffs/tariffs.service";

@Module({
    imports: [],
    controllers: [ActiveController],
    providers: [ActiveService, PrismaService, TariffsService],
})
export class ActiveModule {}