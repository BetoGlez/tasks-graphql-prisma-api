import { Injectable } from "@nestjs/common";

import { CreateTaskInput, Task, UpdateTaskInput } from "../types/graphql-types";
import { ID, Nullable } from "../types/generic-gql-types";

@Injectable()
export class TaskService {
    public create(createTaskInput: CreateTaskInput): Task {
        throw new Error("Pending for implementation");
    }

    public findAll(): [Task] {
        throw new Error("Pending for implementation");
    }

    public findOne(id: ID): Nullable<Task> {
        throw new Error("Pending for implementation");
    }

    public update(id: ID, updateTaskInput: UpdateTaskInput): Nullable<Task> {
        throw new Error("Pending for implementation");
    }

    public remove(id: ID): Nullable<Task> {
        throw new Error("Pending for implementation");
    }
}
