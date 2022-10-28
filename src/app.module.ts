import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";

import ApiConfig from "./api-constants";
import { TaskModule } from "./task/task.module";

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            typePaths: [ApiConfig.GQL_SCHEMA_PATHS],
            definitions: {
                path: join(process.cwd(), ApiConfig.GQL_DEFINITIONS_PATH),
                outputAs: "class"
            },
            debug: ApiConfig.NODE_ENV === ApiConfig.DEVELOPMENT_ENV,
            playground: ApiConfig.NODE_ENV === ApiConfig.DEVELOPMENT_ENV
        }),
        TaskModule
    ]
})
export class AppModule {}
