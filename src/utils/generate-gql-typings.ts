import { GraphQLDefinitionsFactory } from "@nestjs/graphql";
import { join } from "path";

import ApiConfig from "../api-constants";

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
    typePaths: [ApiConfig.GQL_TYPE_PATHS],
    path: join(process.cwd(), ApiConfig.GQL_DEFINITIONS_PATH),
    watch: true
});
