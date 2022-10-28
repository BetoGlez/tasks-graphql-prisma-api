import { NestFactory } from "@nestjs/core";
import * as dotenv from "dotenv";

// Preloads config before other imports to ensure env variables are available asap
dotenv.config();

import { AppModule } from "./app.module";
import ApiConfig from "./api-constants";

const bootstrap = async (): Promise<void> => {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix(ApiConfig.API_BASE_PATH);
    await app.listen(3000);
};

bootstrap();
