import dotenv from "dotenv";
import { AppError } from "../app/errorHelpers/AppError";
import status from "http-status";

dotenv.config();

interface EnvConfig {
    NODE_ENV: string;
    PORT: string;
    DATABASE_URL: string;
    BETTER_AUTH_URL: string;
    BETTER_AUTH_SECRET: string;
}


const loadEnvVariables = (): EnvConfig => {

const requiredEnvVars = [
    "NODE_ENV",
    "PORT",
    "DATABASE_URL",
    "BETTER_AUTH_URL",
    "BETTER_AUTH_SECRET",
]


requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
        // throw new Error(`Missing required environment variable env: ${varName}`)

        throw new AppError(status.INTERNAL_SERVER_ERROR, `Enviroment variable ${varName} is required but not in .env file`)
}
})

    return{
        NODE_ENV: process.env.NODE_ENV as string,
        PORT: process.env.PORT as string,
        DATABASE_URL: process.env.DATABASE_URL as string,
        BETTER_AUTH_URL: process.env.BETTER_AUTH_URL as string,
        BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET as string,
    }
}


export const envVers = loadEnvVariables()
