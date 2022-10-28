const ApiConfig = {
    NODE_ENV: process.env.NODE_ENV,
    PRODUCTION_ENV: "prod",
    DEVELOPMENT_ENV: "dev",

    API_PORT: Number(process.env.PORT) || 3000,
    API_BASE_PATH: process.env.APP_API_BASE_PATH || "api/v1",

    GQL_TYPE_PATHS: "./src/**/*.graphql",
    GQL_DEFINITIONS_PATH: "src/graphql.ts"
};

export default ApiConfig;