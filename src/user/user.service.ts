import { Injectable } from "@nestjs/common";
import { GraphQLError } from "graphql";

import { CreateUserInput, Task, UpdateUserInput, User } from "../types/graphql-types";
import { PrismaService } from "../../prisma/prisma.service";
import ApiConfig from "../api-constants";

@Injectable()
export class UserService {
    public constructor(private prisma: PrismaService) {}

    public create(createUserInput: CreateUserInput): Promise<User> {
        return this.prisma.user.create({
            data: createUserInput
        });
    }

    public findAll(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    public findOne(id: string): Promise<User> {
        return this.prisma.user.findUnique({
            where: { id }
        });
    }

    public resolveTasks(userId: string): Promise<Task[]> {
        return this.prisma.task.findMany({
            where: { asigneeId: { equals: userId } }
        });
    }

    public async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
        let user: User;

        try {
            user = await this.prisma.user.update({
                where: { id },
                data: updateUserInput
            });
        } catch (err) {
            throw new GraphQLError("Cannot update a user that doesn't exist", { extensions: { code: ApiConfig.ErrorCodes.NOT_FOUND }});
        }

        return user;
    }

    public async remove(id: string): Promise<User> {
        let user: User;

        try {
            user = await this.prisma.user.delete({
                where: { id }
            });
        } catch (err) {
            throw new GraphQLError("Cannot delete a user that doesn't exist", { extensions: { code: ApiConfig.ErrorCodes.NOT_FOUND }});
        }

        return user;
    }
}
