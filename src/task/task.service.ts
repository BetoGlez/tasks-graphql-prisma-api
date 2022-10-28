import { Injectable } from "@nestjs/common";

import { CreateTaskInput, Task, UpdateTaskInput } from "../types/graphql-types";
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class TaskService {
    public constructor(private prisma: PrismaService) {}

    public create(createTaskInput: CreateTaskInput): Promise<Task> {
        return this.prisma.task.create({
            data: createTaskInput
        });
    }

    public findAll(): Promise<Task[]> {
        return this.prisma.task.findMany();
    }

    public async findOne(id: string): Promise<Task> {
        return this.prisma.task.findUnique({
            where: { id }
        });
    }

    public async update(id: string, updateTaskInput: UpdateTaskInput): Promise<Task> {
        let task = await this.findOne(id);

        if (task) {
            task = await this.prisma.task.update({
                where: { id },
                data: updateTaskInput
            });
        }

        return task;
    }

    public remove(id: string): Promise<Task> {
        return this.prisma.task.delete({
            where: { id }
        });
    }
}
