import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

import ApiConfig from "./api-constants";

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            debug: ApiConfig.NODE_ENV === ApiConfig.DEVELOPMENT_ENV,
            playground: ApiConfig.NODE_ENV === ApiConfig.DEVELOPMENT_ENV
        })
    ]
})
export class AppModule {}
