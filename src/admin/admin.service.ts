import { Injectable } from '@nestjs/common';
import { PrismaService } from '../data/prisma.service';
import {
    Clubs,
    Prisma
} from '@prisma/client';
import {CreateClubsDTO} from "./createClubs.DTO";
import {CreateTariffsDto} from "./createTariffs.DTO";

@Injectable()
export class AdminService {
    constructor(private prisma: PrismaService) {}

    async createClub(clubDto: CreateClubsDTO) {
        const data: Prisma.ClubsCreateInput = {
            name: clubDto.name,
            address: clubDto.address
        }

        await this.prisma.clubs.create({
            data
        })
    }

    async deleteClub(clubId: number) {
        const where: Prisma.ClubsWhereUniqueInput = {
            id: clubId
        }

        await this.prisma.clubs.delete({
            where
        });
    }

    async createTariff(tariffDto: CreateTariffsDto) {
        const data: Prisma.TariffsCreateInput = {
            name: tariffDto.name,
            comment: tariffDto.comment,
            price: tariffDto.price,
            period: tariffDto.period
        }

        await this.prisma.tariffs.create({
            data
        })
    }

    async deleteTariff(tariffId: number) {
        const where: Prisma.TariffsWhereUniqueInput = {
            id: tariffId
        }

        await this.prisma.tariffs.delete({
            where
        })
    }
}