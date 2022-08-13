import { Module } from '@nestjs/common';
import {PrismaService} from "../data/prisma.service";
import {TariffsController} from "./tariffs.controller";
import {TariffsService} from "./tariffs.service";

@Module({
    imports: [],
    controllers: [TariffsController],
    providers: [TariffsService, PrismaService],
})
export class TariffsModule {}