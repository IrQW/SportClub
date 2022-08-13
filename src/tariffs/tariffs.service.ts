import { Injectable } from '@nestjs/common';
import { PrismaService } from '../data/prisma.service';
import {
    Tariffs,
    Prisma
} from '@prisma/client';
import {TariffsRO} from "./tariffs.RO";

@Injectable()
export class TariffsService {
    constructor(private prisma: PrismaService) {}

    async tariffs(tariffsWhereUniqueInput: Prisma.TariffsWhereUniqueInput): Promise<Tariffs | null> {
        return this.prisma.tariffs.findUnique({
            where: tariffsWhereUniqueInput,
        });
    }

    async tariffses(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.TariffsWhereUniqueInput;
        where?: Prisma.TariffsWhereInput;
        orderBy?: Prisma.TariffsOrderByWithRelationInput;
    }): Promise<Tariffs[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.tariffs.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async findAll(): Promise<Array<TariffsRO>> {
        return this.prisma.tariffs.findMany().then(x => x.map(t => new TariffsRO(t.name,
            t.price, t.comment, t.period)));
    }

    async findById(id: number): Promise<Tariffs> {
        const data: Prisma.TariffsWhereUniqueInput = {
            id: id
        }

        return this.prisma.tariffs.findFirst({
           where: data
        });
    }

    async createTariffs(data: Prisma.TariffsCreateInput): Promise<Tariffs> {
        return this.prisma.tariffs.create({
            data,
        });
    }

    async updateTariffs(params: {
        where: Prisma.TariffsWhereUniqueInput;
        data: Prisma.TariffsUpdateInput;
    }): Promise<Tariffs> {
        const { where, data } = params;
        return this.prisma.tariffs.update({
            data,
            where,
        });
    }

    async deleteTariffs(where: Prisma.TariffsWhereUniqueInput): Promise<Tariffs> {
        return this.prisma.tariffs.delete({
            where,
        });
    }
}