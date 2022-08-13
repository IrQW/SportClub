import { Injectable } from '@nestjs/common';
import { PrismaService } from '../data/prisma.service';
import {
    Activ_tariffs,
    Prisma
} from '@prisma/client';
import {TariffsService} from "../tariffs/tariffs.service";
import {CreateActiveDto} from "./createActive.DTO";

@Injectable()
export class ActiveService {
    constructor(private prisma: PrismaService, private tariffsService: TariffsService) {}

    async follow(activeDto: CreateActiveDto, userId: number) {
        const tariff = await this.tariffsService.findById(activeDto.tariff_id);
        const timeStart = activeDto.time_start != undefined ? activeDto.time_start : new Date(Date.now());
        const timeEnd = new Date(timeStart.getTime() + tariff.period * 86400000);

        const where: Prisma.UserWhereUniqueInput = {
            id: userId
        }

        const data: Prisma.Activ_tariffsCreateInput = {
            user: {
                connect: where
            },
            Tariffs_id: activeDto.tariff_id,
            Time_start: timeStart,
            Time_end: timeEnd
        }

        await this.prisma.activ_tariffs.create({
            data
        })
    }

    async activ_tariffs(activeWhereUniqueInput: Prisma.Activ_tariffsWhereUniqueInput): Promise<Activ_tariffs | null> {
        return this.prisma.activ_tariffs.findUnique({
            where: activeWhereUniqueInput,
        });
    }

    async activ_tariffses(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.Activ_tariffsWhereUniqueInput;
        where?: Prisma.Activ_tariffsWhereInput;
        orderBy?: Prisma.Activ_tariffsOrderByWithRelationInput;
    }): Promise<Activ_tariffs[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.activ_tariffs.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createActiv_tariffs(data: Prisma.Activ_tariffsCreateInput): Promise<Activ_tariffs> {
        return this.prisma.activ_tariffs.create({
            data,
        });
    }

    async updateActiv_tariffs(params: {
        where: Prisma.Activ_tariffsWhereUniqueInput;
        data: Prisma.Activ_tariffsUpdateInput;
    }): Promise<Activ_tariffs> {
        const { where, data } = params;
        return this.prisma.activ_tariffs.update({
            data,
            where,
        });
    }

    async deleteActiv_tariffs(where: Prisma.Activ_tariffsWhereUniqueInput): Promise<Activ_tariffs> {
        return this.prisma.activ_tariffs.delete({
            where,
        });
    }
}