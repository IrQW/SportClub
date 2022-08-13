import { Module } from '@nestjs/common';
import {PrismaService} from "../data/prisma.service";
import {AdminController} from "./admin.controller";
import {AdminService} from "./admin.service";

@Module({
    imports: [],
    controllers: [AdminController],
    providers: [AdminService, PrismaService],
})
export class AdminModule {}