import { Resolver, Query, Mutation, Args, ResolveField, Parent } from "@nestjs/graphql";

import { UserService } from "./user.service";
import { CreateUserInput, Task, UpdateUserInput, User } from "../types/graphql-types";

@Resolver("User")
export class UserResolver {
    public constructor(private readonly userService: UserService) {}

    @Mutation("createUser")
    public create(@Args("createUserInput") createUserInput: CreateUserInput): Promise<User> {
        return this.userService.create(createUserInput);
    }

    @Query("users")
    public findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Query("user")
    public findOne(@Args("id") id: string): Promise<User> {
        return this.userService.findOne(id);
    }

    @ResolveField()
    public tasks(@Parent() user: User): Promise<Task[]> {
        return this.userService.resolveTasks(user.id);
    }

    @Mutation("updateUser")
    public update(@Args("updateUserInput") updateUserInput: UpdateUserInput): Promise<User> {
        return this.userService.update(updateUserInput.id, updateUserInput);
    }

    @Mutation("removeUser")
    public remove(@Args("id") id: string): Promise<User> {
        return this.userService.remove(id);
    }
}
