import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";

import { TaskService } from "./task.service";
import { CreateTaskInput, Task, UpdateTaskInput } from "../types/graphql-types";
import { ID, Nullable } from "../types/generic-gql-types";

@Resolver("Task")
export class TaskResolver {
    public constructor(private readonly taskService: TaskService) {}

    @Mutation("createTask")
    public create(@Args("createTaskInput") createTaskInput: CreateTaskInput): Task {
        return this.taskService.create(createTaskInput);
    }

    @Query("tasks")
    public findAll(): [Task] {
        return this.taskService.findAll();
    }

    @Query("task")
    public findOne(@Args("id") id: ID): Nullable<Task> {
        return this.taskService.findOne(id);
    }

    @Mutation("updateTask")
    public update(@Args("updateTaskInput") updateTaskInput: UpdateTaskInput): Nullable<Task> {
        return this.taskService.update(updateTaskInput.id, updateTaskInput);
    }

    @Mutation("removeTask")
    public remove(@Args("id") id: ID): Nullable<Task> {
        return this.taskService.remove(id);
    }
}
