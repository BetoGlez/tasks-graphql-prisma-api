import { Resolver, Query, Mutation, Args, ResolveField, Parent } from "@nestjs/graphql";

import { TaskService } from "./task.service";
import { CreateTaskInput, Task, TasksInput, UpdateTaskInput, User } from "../types/graphql-types";

@Resolver("Task")
export class TaskResolver {
    public constructor(private readonly taskService: TaskService) {}

    @Mutation("createTask")
    public create(@Args("createTaskInput") createTaskInput: CreateTaskInput): Promise<Task> {
        return this.taskService.create(createTaskInput);
    }

    @Query("tasks")
    public findAll(@Args("tasksInput") tasksInput?: TasksInput): Promise<Task[]> {
        return this.taskService.findAll(tasksInput);
    }

    @Query("task")
    public findOne(@Args("id") id: string): Promise<Task> {
        return this.taskService.findOne(id);
    }

    @ResolveField()
    public asignee(@Parent() task: Task): Promise<User> {
        return this.taskService.resolveAsignee(task.id);
    }

    @Mutation("updateTask")
    public update(@Args("updateTaskInput") updateTaskInput: UpdateTaskInput): Promise<Task> {
        return this.taskService.update(updateTaskInput.id, updateTaskInput);
    }

    @Mutation("removeTask")
    public remove(@Args("id") id: string): Promise<Task> {
        return this.taskService.remove(id);
    }
}
