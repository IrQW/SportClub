import {HttpException, Injectable} from '@nestjs/common';
import { PrismaService } from '../data/prisma.service';
import {
    User,
    Prisma
} from '@prisma/client';
import {CreateUserDto} from "./createUser.DTO";
import {UserRO} from "./user.RO";

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async findUserByEmail(email: string): Promise<UserRO> {
        const predicate: Prisma.UserWhereUniqueInput = {
            email: email
        }

        const user = await this.prisma.user.findUnique({
            where: predicate,
        });

        if (user == null) {
            throw new HttpException("User not found", 400);
        }

        return new UserRO(user.id, user.email, user.name);
    }

    async user(
        userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    ): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: userWhereUniqueInput,
        });
    }

    async users(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;
    }): Promise<User[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.user.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createUser(data: CreateUserDto): Promise<User> {

        const user_inf: Prisma.UserCreateInput = {
            email: data.email,
            name: data.name,
            password: data.pass,
            telephone: data.telephone
        };

        return await this.saveUser(user_inf);
    }

    saveUser(data: Prisma.UserCreateInput): Promise<User> {
        return this.prisma.user.create({
            data
        });
    }

    async updateUser(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<User> {
        const { where, data } = params;
        return this.prisma.user.update({
            data,
            where,
        });
    }

    async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prisma.user.delete({
            where,
        });
    }
}
