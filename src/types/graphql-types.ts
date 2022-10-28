
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateTaskInput {
    name: string;
    asignee?: Nullable<string>;
}

export class UpdateTaskInput {
    id: string;
    name?: Nullable<string>;
    asignee?: Nullable<string>;
}

export class Task {
    id: string;
    name: string;
    asignee?: Nullable<string>;
}

export abstract class IQuery {
    abstract tasks(): Nullable<Task>[] | Promise<Nullable<Task>[]>;

    abstract task(id: string): Nullable<Task> | Promise<Nullable<Task>>;
}

export abstract class IMutation {
    abstract createTask(createTaskInput: CreateTaskInput): Task | Promise<Task>;

    abstract updateTask(updateTaskInput: UpdateTaskInput): Nullable<Task> | Promise<Nullable<Task>>;

    abstract removeTask(id: string): Nullable<Task> | Promise<Nullable<Task>>;
}

type Nullable<T> = T | null;
