
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateTaskInput {
    name: string;
    asigneeId?: Nullable<string>;
}

export class UpdateTaskInput {
    id: string;
    name?: Nullable<string>;
    asigneeId?: Nullable<string>;
}

export class CreateUserInput {
    name: string;
}

export class UpdateUserInput {
    id: string;
    name?: Nullable<string>;
}

export class Task {
    id: string;
    name: string;
    asignee?: Nullable<User>;
}

export abstract class IQuery {
    abstract tasks(): Nullable<Task>[] | Promise<Nullable<Task>[]>;

    abstract task(id: string): Nullable<Task> | Promise<Nullable<Task>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createTask(createTaskInput: CreateTaskInput): Task | Promise<Task>;

    abstract updateTask(updateTaskInput: UpdateTaskInput): Nullable<Task> | Promise<Nullable<Task>>;

    abstract removeTask(id: string): Nullable<Task> | Promise<Nullable<Task>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: string;
    name: string;
    tasks?: Nullable<Task[]>;
}

type Nullable<T> = T | null;
