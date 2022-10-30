import { Injectable } from "@nestjs/common";
import { GraphQLError } from "graphql";

import { CreateTaskInput, Task, TasksInput, UpdateTaskInput, User } from "../types/graphql-types";
import { PrismaService } from "../../prisma/prisma.service";
import ApiConfig from "../api-constants";

@Injectable()
export class TaskService {
    public constructor(private prisma: PrismaService) {}

    public create(createTaskInput: CreateTaskInput): Promise<Task> {
        return this.prisma.task.create({
            data: createTaskInput
        });
    }

    public findAll(tasksInput?: TasksInput): Promise<Task[]> {
        return this.prisma.task.findMany({
            skip: tasksInput?.pagination?.skip,
            take: tasksInput?.pagination?.take,
            where: {
                name: { contains: tasksInput?.search }
            }
        });
    }

    public async findOne(id: string): Promise<Task> {
        return this.prisma.task.findUnique({
            where: { id }
        });
    }

    public async resolveAsignee(taskId: string): Promise<User> {
        return this.prisma.user.findFirst({
            where: { tasks: { some: { id: { equals: taskId } } } }
        });
    }

    public async update(id: string, updateTaskInput: UpdateTaskInput): Promise<Task> {
        let task: Task;

        try {
            task = await this.prisma.task.update({
                where: { id },
                data: updateTaskInput
            });
        } catch (err) {
            throw new GraphQLError("Cannot update a task that doesn't exist", { extensions: { code: ApiConfig.ErrorCodes.NOT_FOUND }});
        }

        return task;
    }

    public async remove(id: string): Promise<Task> {
        let task: Task;

        try {
            task = await this.prisma.task.delete({
                where: { id }
            });
        } catch (err) {
            throw new GraphQLError("Cannot delete a task that doesn't exist", { extensions: { code: ApiConfig.ErrorCodes.NOT_FOUND }});
        }

        return task;
    }
}
