import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";

import { TaskService } from "./task.service";
import { CreateTaskInput, UpdateTaskInput } from "../types/graphql-types";

@Resolver("Task")
export class TaskResolver {
    public constructor(private readonly taskService: TaskService) {}

    @Mutation("createTask")
    public create(@Args("createTaskInput") createTaskInput: CreateTaskInput): string {
        return this.taskService.create(createTaskInput);
    }

    @Query("tasks")
    public findAll(): string {
        return this.taskService.findAll();
    }

    @Query("task")
    public findOne(@Args("id") id: number): string {
        return this.taskService.findOne(id);
    }

    @Mutation("updateTask")
    public update(@Args("updateTaskInput") updateTaskInput: UpdateTaskInput): string {
        return this.taskService.update(updateTaskInput.id, updateTaskInput);
    }

    @Mutation("removeTask")
    public remove(@Args("id") id: number): string {
        return this.taskService.remove(id);
    }
}
