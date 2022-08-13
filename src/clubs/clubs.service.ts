import { Injectable } from '@nestjs/common';
import { PrismaService } from '../data/prisma.service';
import {
    Clubs,
    Prisma
} from '@prisma/client';

@Injectable()
export class ClubsService {
    constructor(private prisma: PrismaService) {}

    async clubs(clubsWhereUniqueInput: Prisma.ClubsWhereUniqueInput): Promise<Clubs | null> {
        return this.prisma.clubs.findUnique({
            where: clubsWhereUniqueInput,
        });
    }

    async clubses(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ClubsWhereUniqueInput;
        where?: Prisma.ClubsWhereInput;
        orderBy?: Prisma.ClubsOrderByWithRelationInput;
    }): Promise<Clubs[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.clubs.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createClubs(data: Prisma.ClubsCreateInput): Promise<Clubs> {
        return this.prisma.clubs.create({
            data,
        });
    }

    async updateClubs(params: {
        where: Prisma.ClubsWhereUniqueInput;
        data: Prisma.ClubsUpdateInput;
    }): Promise<Clubs> {
        const { where, data } = params;
        return this.prisma.clubs.update({
            data,
            where,
        });
    }

    async deleteClubs(where: Prisma.ClubsWhereUniqueInput): Promise<Clubs> {
        return this.prisma.clubs.delete({
            where,
        });
    }
}