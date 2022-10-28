import { Injectable } from "@nestjs/common";

import { CreateTaskInput, UpdateTaskInput } from "../types/graphql-types";

@Injectable()
export class TaskService {
    public create(createTaskInput: CreateTaskInput): string {
        return "This action adds a new task";
    }

    public findAll(): string {
        return "This action returns all task";
    }

    public findOne(id: number): string {
        return `This action returns a #${id} task`;
    }

    public update(id: number, updateTaskInput: UpdateTaskInput): string {
        return `This action updates a #${id} task`;
    }

    public remove(id: number): string {
        return `This action removes a #${id} task`;
    }
}
